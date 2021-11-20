import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ProjectModel } from '../project/Project.model';

@Table({ tableName: 'label', underscored: true })
export class LabelModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUID)
  id: UUID;

  @AllowNull(false)
  @ForeignKey(() => ProjectModel)
  @Column(DataTypes.UUID)
  projectId: UUID;

  @BelongsTo(() => ProjectModel)
  project: ProjectModel;

  @AllowNull(false)
  @Column
  name: String;

  @AllowNull(false)
  @Column
  bgColor: String;

  @AllowNull(false)
  @Column
  fgColor: String;
}
