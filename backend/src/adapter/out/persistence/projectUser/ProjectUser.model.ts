import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ProjectModel } from '../project/Project.model';
import { DataTypes } from 'sequelize';
import { UserModel } from '../user/User.model';

@Table({ tableName: 'project_user', underscored: true })
export class ProjectUserModel extends Model {
  @ForeignKey(() => ProjectModel)
  @AllowNull(false)
  @Column(DataTypes.UUID)
  projectId: UUID;

  @BelongsTo(() => ProjectModel)
  project: ProjectModel;

  @ForeignKey(() => UserModel)
  @AllowNull(false)
  @Column(DataTypes.UUID)
  userId: UUID;

  @BelongsTo(() => UserModel)
  user: UserModel;
}
