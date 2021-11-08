import { IssueRepository } from '../../../../domain/issue/IssueRepository';
import { Issue } from '../../../../domain/issue/Issue';
import { IssueModel } from './Issue.model';
import { issueToDomain } from './IssueMapper';

export class SeqIssueRepository implements IssueRepository {
  async findAll(): Promise<Issue[]> {
    return IssueModel.findAll().then((result) => result.map((model) => issueToDomain(model)));
  }
}
