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
import { IssueModel } from '../issue/Issue.model';
import { UserModel } from '../user/User.model';

@Table({ tableName: 'comment', underscored: true })
export class CommentModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUID)
  id: UUID;

  @AllowNull(false)
  @ForeignKey(() => IssueModel)
  @Column(DataTypes.UUID)
  issueId: UUID;

  @BelongsTo(() => IssueModel)
  issue: IssueModel;

  @AllowNull(false)
  @Column
  content: String;

  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Column(DataTypes.UUID)
  authorId: UUID;

  @BelongsTo(() => UserModel)
  author: UserModel;
}
