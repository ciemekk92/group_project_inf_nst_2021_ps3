import { initServer } from '../Server';
import supertest, { Response, SuperTest, Test } from 'supertest';
import { container } from '../adapter/DependencyContainer';
import { CreateProjectCommand } from '../domain/project/CreateProjectCommand';
import { synchronizeDatabase } from '../adapter/DatabaseSynchronizer';
import { getAccessToken } from './Common';

describe('Project E2E tests', () => {
  let app: SuperTest<Test>;

  beforeAll(async () => {
    app = await supertest(await initServer());
  });

  beforeEach(async () => {
    await synchronizeDatabase();
  });

  it('Should return 401 for unauthorized', async () => {
    await app
      .get('/api/projects')
      .expect(401)
      .then(async (response: Response) => {
        expect(response.body).toEqual({
          message: 'Unauthorized request.'
        });
      });
  });

  it('Should return all projects', async () => {
    await container.projectService.save(new CreateProjectCommand('Project1'));
    await container.projectService.save(new CreateProjectCommand('Project2'));

    await app
      .get('/api/projects')
      .set('Authorization', 'Bearer ' + getAccessToken())
      .expect(200)
      .then(async (response: Response) => {
        expect(response.body).toEqual([
          {
            id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            name: 'Project1',
            issues: []
          },
          {
            id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            name: 'Project2',
            issues: []
          }
        ]);
      });
  });

  it('Should create project', async () => {
    await app
      .post('/api/projects')
      .set('Authorization', 'Bearer ' + getAccessToken())
      .send({ name: 'Test project name' })
      .expect(200)
      .then(async (response: Response) => {
        const createdProject = await container.projectService.findAll();

        expect(createdProject.length).toBe(1);

        expect(response.body).toEqual({
          id: createdProject[0].id,
          createdAt: createdProject[0].createdAt.toISOString(),
          updatedAt: createdProject[0].updatedAt.toISOString(),
          name: 'Test project name',
          issues: []
        });
      });
  });
});
