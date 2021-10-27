import supertest, { Response, SuperTest, Test } from 'supertest';
import { initServer } from '../Server';
import { synchronizeDatabase } from '../adapter/DatabaseSynchronizer';
import { container } from '../adapter/DependencyContainer';
import { CreateUserCommand } from '../domain/user/CreateUserCommand';
import { SeqUserRepository } from '../adapter/out/persistence/user/SeqUserRepository';
import { UserRepository } from '../domain/user/UserRepository';
import assert from 'assert';

describe('Project E2E tests', () => {
  let app: SuperTest<Test>;
  const userRepository: UserRepository = new SeqUserRepository();

  beforeAll(async () => {
    app = await supertest(await initServer());
  });

  beforeEach(async () => {
    await synchronizeDatabase();
  });

  it('Should save new user', async () => {
    const data = {
      firstName: 'Krzys',
      lastName: 'Snobko',
      email: 'krzys.snobko@wp.pl',
      displayName: 'Krzycho',
      password: 'tajne123'
    };

    await app
      .post('/api/users')
      .send(data)
      .expect(200)
      .then(async (response: Response) => {
        const user = await userRepository.findByEmail(data.email);
        assert(user !== null);

        expect(response.body).toEqual({
          id: expect.any(String),
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          displayName: data.displayName
        });
      });
  });

  it('Should return 400 when email is already used', async () => {
    const data = {
      firstName: 'Krzys',
      lastName: 'Snobko',
      email: 'krzys.snobko@wp.pl',
      displayName: 'Krzycho',
      password: 'tajne123'
    };
    await container.userService.save(
      new CreateUserCommand(
        data.firstName,
        data.lastName,
        data.password,
        data.email,
        data.displayName
      )
    );

    await app
      .post('/api/users')
      .send(data)
      .expect(400)
      .then(async (response: Response) => {
        expect(response.body).toEqual([
          {
            message: 'User with given email already exists.'
          }
        ]);
      });
  });

  it('Should return 400 for invalid body', async () => {
    const data = {
      firstName: 123,
      lastName: '',
      email: 'krzysXD',
      password: 'ta'
    };

    await app
      .post('/api/users')
      .send(data)
      .expect(400)
      .then(async (response: Response) => {
        expect(response.body).toEqual([
          {
            message: 'firstName must be a string'
          },
          {
            message: 'lastName should not be empty'
          },
          {
            message: 'password must be longer than or equal to 6 characters'
          },
          {
            message: 'email must be an email'
          }
        ]);
      });
  });
});
