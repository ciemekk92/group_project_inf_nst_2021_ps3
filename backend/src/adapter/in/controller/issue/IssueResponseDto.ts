import { IssueType } from '../../../out/persistence/issue/IssueType';
import { IssueStatus } from '../../../out/persistence/issue/IssueStatus';

export class IssueResponseDto {
  id: UUID;
  description: string;
  projectId: UUID;
  type: IssueType;
  status: IssueStatus;
  authorId: UUID;
  timeSpentInHours: number;
  createdAt: Date;
  assigneeId: UUID;
  parentId?: UUID;
  timeEstimatedInHours: number;
  updatedAt: Date;

  constructor(
    id: UUID,
    description: string,
    projectId: UUID,
    type: IssueType,
    status: IssueStatus,
    authorId: UUID,
    timeSpentInHours: number,
    createdAt: Date,
    assigneeId: UUID,
    parentId?: UUID,
    timeEstimatedInHours?: number,
    updatedAt?: Date
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
