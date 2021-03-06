import { IssueService } from '../domain/issue/IssueService';
import { ProjectService } from '../domain/project/ProjectService';
import { SeqProjectRepository } from './out/persistence/project/SeqProjectModelRepository';
import { UserService } from '../domain/user/UserService';
import { SeqUserRepository } from './out/persistence/user/SeqUserRepository';
import { AuthService } from '../domain/user/AuthService';
import { SeqUserActivationTokenRepository } from './out/persistence/user/SeqUserActivationTokenRepository';
import { NodemailerSender } from './out/NodemailerSender';
import { SeqResetPasswordTokenRepository } from './out/persistence/user/SeqResetPasswordTokenRepository';
import { SeqProjectUserRepository } from './out/persistence/projectUser/SeqProjectUserRepository';

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

const seqUserRepository = new SeqUserRepository();

export const container = new DependencyContainer(
  new IssueService(),
  new ProjectService(new SeqProjectRepository(seqUserRepository, new SeqProjectUserRepository())),
  new UserService(
    seqUserRepository,
    new SeqUserActivationTokenRepository(),
    new NodemailerSender(),
    new SeqResetPasswordTokenRepository()
  ),
  new AuthService(seqUserRepository)
);
