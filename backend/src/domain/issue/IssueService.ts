import { IssueRepository } from './IssueRepository';
import { Issue } from './Issue';

export class IssueService {
  constructor(private issueRepository: IssueRepository) {}

  async findAll(): Promise<Issue[]> {
    return this.issueRepository.findAll();
  }
}
