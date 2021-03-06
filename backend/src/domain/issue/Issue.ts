import { IssueType } from '../../adapter/out/persistence/issue/IssueType';
import { IssueStatus } from '../../adapter/out/persistence/issue/IssueStatus';

export class Issue {
  id: UUID;
  description: string;
  projectId: UUID;
  type: IssueType;
  status: IssueStatus;
  parentId: UUID;
  authorId: UUID;
  assigneeId: UUID;
  timeSpentInHours: number;
  createdAt: Date;
  timeEstimatedInHours?: number;
  updatedAt?: Date;

  constructor(
    id: UUID,
    description: string,
    projectId: UUID,
    type: IssueType,
    status: IssueStatus,
    parentId: UUID,
    authorId: UUID,
    assigneeId: UUID,
    timeSpentInHours: number,
    timeEstimatedInHours: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.description = description;
    this.projectId = projectId;
    this.type = type;
    this.status = status;
    this.parentId = parentId;
    this.authorId = authorId;
    this.assigneeId = assigneeId;
    this.timeSpentInHours = timeSpentInHours;
    this.timeEstimatedInHours = timeEstimatedInHours;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
