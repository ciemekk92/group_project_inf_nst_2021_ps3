import { AllowNull, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataType, Sequelize, DataTypes } from 'sequelize';
import { Issue } from '../../../../domain/issue/Issue';
import { IssueModel } from '../issue/IssueModel';
import { UUID } from '../../../../utils/Types';

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
