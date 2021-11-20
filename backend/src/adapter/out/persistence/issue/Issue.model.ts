import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { ProjectModel } from '../project/Project.model';
import { DataTypes } from 'sequelize';
import { IssueType } from './IssueType';
import { UserModel } from '../user/User.model';
import { IssueStatus } from './IssueStatus';

@Table({ tableName: 'issue', underscored: true })
export class IssueModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUID)
  id: UUID;

  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @ForeignKey(() => ProjectModel)
  @Column(DataTypes.UUID)
  projectId: UUID;

  @BelongsTo(() => ProjectModel)
  project: ProjectModel;

  @AllowNull(false)
  @Column(DataTypes.ENUM('BUG', 'TASK', 'SUBTASK', 'REFACTOR'))
  type: IssueType;

  @AllowNull(false)
  @Column(DataTypes.ENUM('TODO', 'IN_PROGRESS', 'ON_HOLD', 'TESTING', 'COMPLETED'))
  status: IssueStatus;

  @AllowNull(true)
  @ForeignKey(() => IssueModel)
  @Column(DataTypes.UUID)
  parentId: UUID;

  @BelongsTo(() => IssueModel)
  parent: IssueModel;

  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Column(DataTypes.UUID)
  authorId: UUID;

  @BelongsTo(() => UserModel)
  author: UserModel;

  @AllowNull(true)
  @ForeignKey(() => UserModel)
  @Column(DataTypes.UUID)
  assigneeId: UUID;

  @BelongsTo(() => UserModel)
  assignee: UserModel;

  @AllowNull(false)
  @Column
  timeSpentInHours: number;

  @AllowNull(true)
  @Column
  timeEstimatedInHours: number;
}
