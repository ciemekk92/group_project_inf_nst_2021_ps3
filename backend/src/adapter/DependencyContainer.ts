import { IssueService } from '../domain/issue/IssueService';
import { SeqIssueRepository } from './out/persistence/issue/SeqIssueRepository';
import { ProjectService } from '../domain/project/ProjectService';
import { SeqProjectRepository } from './out/persistence/project/SeqProjectModelRepository';
import { UserService } from '../domain/user/UserService';
import { SeqUserRepository } from './out/persistence/user/SeqUserRepository';
import { AuthService } from '../domain/user/AuthService';
import { SeqUserActivationTokenRepository } from './out/persistence/user/SeqUserActivationTokenRepository';

class DependencyContainer {
  readonly issueService: IssueService;
  readonly projectService: ProjectService;
  readonly userService: UserService;
  readonly authService: AuthService;

  constructor(
    issueService: IssueService,
    projectService: ProjectService,
    userService: UserService,
    authService: AuthService
  ) {
    this.issueService = issueService;
    this.projectService = projectService;
    this.userService = userService;
    this.authService = authService;
  }
}

export const container = new DependencyContainer(
  new IssueService(new SeqIssueRepository()),
  new ProjectService(new SeqProjectRepository()),
  new UserService(new SeqUserRepository(), new SeqUserActivationTokenRepository()),
  new AuthService(new SeqUserRepository())
);
