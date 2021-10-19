import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class TaskModel extends Model {
  @Column
  description!: string;
}
