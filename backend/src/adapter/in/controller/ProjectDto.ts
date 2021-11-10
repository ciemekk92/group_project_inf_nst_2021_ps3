import { CreateProjectCommand } from '../../../domain/project/CreateProjectCommand';
import { IsNotEmpty, IsString } from 'class-validator';
import { ValidationMessage } from '../ValidationMessages';

export class ProjectDto {
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  name!: string;

  toCommand(): CreateProjectCommand {
    return new CreateProjectCommand(this.name);
  }
}
