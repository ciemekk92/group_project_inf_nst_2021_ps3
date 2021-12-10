import { CreateProjectCommand, UpdateProjectCommand } from '../../../../domain/project/Commands';
import { IsNotEmpty, IsString } from 'class-validator';
import { ValidationMessage } from '../../ValidationMessages';

export class ProjectRequestDto {
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  name: string;

  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  description: string;

  toCreateCommand(userId: UUID): CreateProjectCommand {
    return new CreateProjectCommand(this.name, this.description, userId);
  }

  toUpdateCommand(id: UUID, userId: UUID): UpdateProjectCommand {
    return new UpdateProjectCommand(id, this.name, this.description, userId);
  }
}
