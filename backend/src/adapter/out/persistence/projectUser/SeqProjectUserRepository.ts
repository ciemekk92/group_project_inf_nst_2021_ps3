import { ProjectUserModel } from './ProjectUser.model';

export class SeqProjectUserRepository {
  async save(projectId: UUID, userId: UUID) {
    await new ProjectUserModel({
      projectId: projectId,
      userId: userId
    }).save();
  }
}
