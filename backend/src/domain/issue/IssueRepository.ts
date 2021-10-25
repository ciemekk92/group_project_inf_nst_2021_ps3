import { Issue } from './Issue';

export interface IssueRepository {
  findAll(): Promise<Issue[]>;
}
