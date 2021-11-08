import { AllowNull, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { IssueModel } from '../issue/Issue.model';

@Table({ tableName: 'project', underscored: true })
export class ProjectModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUID)
  id: UUID;

  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => IssueModel)
  issues: IssueModel[] = [];
}
