import { AllowNull, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataType, Sequelize, DataTypes } from 'sequelize';
import { Task } from '../../../../domain/task/Task';
import { TaskModel } from '../task/TaskModel';
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

  @HasMany(() => TaskModel)
  tasks: TaskModel[] = [];
}
