import { AllowNull, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { IssueModel } from '../issue/IssueModel';

@Table
export class ProjectModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUIDV4)
  id!: UUID;

  @AllowNull(false)
  @Column
  name!: string;

  @HasMany(() => IssueModel)
  issues: IssueModel[] = [];
}
