import { IssueService } from '../domain/issue/IssueService';
import { SeqIssueRepository } from './out/persistence/issue/SeqIssueRepository';
import { ProjectService } from '../domain/project/ProjectService';
import { SeqProjectRepository } from './out/persistence/project/SeqProjectModelRepository';

class DependencyContainer {
  readonly issueService: IssueService;
  readonly projectService: ProjectService;

  constructor(issueService: IssueService, projectService: ProjectService) {
    this.issueService = issueService;
    this.projectService = projectService;
  }
}

export const container = new DependencyContainer(
  new IssueService(new SeqIssueRepository()),
  new ProjectService(new SeqProjectRepository())
);
