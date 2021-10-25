import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ProjectModel } from '../project/ProjectModel';
import { DataTypes } from 'sequelize';
import { UUID } from '../../../../utils/Types';

@Table
export class IssueModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUIDV4)
  id!: UUID;

  @AllowNull(false)
  @Column
  description!: string;

  @AllowNull(false)
  @ForeignKey(() => ProjectModel)
  @Column(DataTypes.UUIDV4)
  projectId!: UUID;

  @BelongsTo(() => ProjectModel)
  project!: ProjectModel;
}
