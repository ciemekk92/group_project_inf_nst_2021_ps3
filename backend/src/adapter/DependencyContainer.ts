import { IssueService } from '../domain/issue/IssueService';
import { SeqIssueRepository } from './out/persistence/issue/SeqIssueRepository';
import { ProjectService } from '../domain/project/ProjectService';
import { SeqProjectRepository } from './out/persistence/project/SeqProjectModelRepository';
import { UserService } from '../domain/user/UserService';
import { SeqUserRepository } from './out/persistence/user/SeqUserRepository';

class DependencyContainer {
  readonly issueService: IssueService;
  readonly projectService: ProjectService;
  readonly userService: UserService;

  constructor(
    issueService: IssueService,
    projectService: ProjectService,
    userService: UserService
  ) {
    this.issueService = issueService;
    this.projectService = projectService;
    this.userService = userService;
  }
}

export const container = new DependencyContainer(
  new IssueService(new SeqIssueRepository()),
  new ProjectService(new SeqProjectRepository()),
  new UserService(new SeqUserRepository())
);
