import supertest, { Response, SuperTest, Test } from 'supertest';
import { initServer } from '../Server';
import { synchronizeDatabase } from '../adapter/DatabaseSynchronizer';
import { container } from '../adapter/DependencyContainer';
import { CreateUserCommand } from '../domain/user/CreateUserCommand';
import { UserRepository } from '../domain/user/UserRepository';
import { SeqUserRepository } from '../adapter/out/persistence/user/SeqUserRepository';
import { User } from '../domain/user/User';
import { getAccessToken, getRefreshToken } from './Common';

describe('Auth E2E tests', () => {
  let app: SuperTest<Test>;
  const userRepository: UserRepository = new SeqUserRepository();

  beforeAll(async () => {
    app = await supertest(await initServer());
  });

  beforeEach(async () => {
    await synchronizeDatabase();
  });

  it('Should return access and refresh tokens', async () => {
    const data = {
      email: 'krzys@wp.pl',
      password: '*asuid$353sdfsAs2137*'
    };
    await container.userService.save(
      new CreateUserCommand('krzys', 'snopko', data.password, data.email, null)
    );

    await app
      .post('/api/auth/login')
      .send({ email: data.email, password: data.password })
      .expect(200)
      .then(async (response: Response) => {
        const user: User = await userRepository.findByEmail(data.email);
        expect(user.refreshToken).not.toBeNull();
        expect(response.body).toEqual({ accessToken: expect.any(String) });
        expect(response.headers['set-cookie'][0]).toMatch(
          new RegExp(`^refreshToken=${user.refreshToken}?`)
        );
      });
  });

  it('Should 401 for bad credentials', async () => {
    const data = {
      email: 'krzys@wp.pl',
      password: '*asuid$353sdfsAs2137*'
    };
    await container.userService.save(
      new CreateUserCommand('krzys', 'snopko', data.password, data.email, null)
    );

    await app
      .post('/api/auth/login')
      .send({ email: data.email, password: 'invalid' })
      .expect(401)
      .then(async (response: Response) => {
        expect(response.body).toEqual([{ message: 'Invalid credentials.' }]);
      });
  });

  it('Should successfully get access token and refresh', async () => {
    const user = await container.userService.save(
      new CreateUserCommand('krzys', 'snopko', '*asuid$353sdfsAs2137*', 'krzys@wp.pl', null)
    );
    const oldRefreshToken = getRefreshToken(user.id);
    user.refreshToken = oldRefreshToken;
    await userRepository.save(user);

    await app
      .post('/api/auth/refresh-token')
      .set('Authorization', 'Bearer ' + getAccessToken(user.id))
      .set('Cookie', ['refreshToken=' + oldRefreshToken])
      .send()
      .expect(200)
      .then(async (response: Response) => {
        const user: User = await userRepository.findByEmail('krzys@wp.pl');
        expect(user.refreshToken)!.toEqual(oldRefreshToken);

        expect(response.body).toEqual({ accessToken: expect.any(String) });
        expect(response.headers['set-cookie'][0]).toMatch(
          new RegExp(`^refreshToken=${user.refreshToken}?`)
        );
      });
  });
});
