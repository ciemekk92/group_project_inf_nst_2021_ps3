import {
  AllowNull,
  BelongsToMany,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { IssueModel } from '../issue/Issue.model';
import { UserModel } from '../user/User.model';
import { ProjectUserModel } from '../projectUser/ProjectUser.model';

@Table({ tableName: 'project', underscored: true })
export class ProjectModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUID)
  id: UUID;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  description: string;

  @HasMany(() => IssueModel)
  issues: IssueModel[];

  @BelongsToMany(() => UserModel, () => ProjectUserModel)
  users: UserModel[];
}
