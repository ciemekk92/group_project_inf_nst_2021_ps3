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
}
