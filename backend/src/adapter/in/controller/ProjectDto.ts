import { CreateProjectCommand } from '../../../domain/project/CreateProjectCommand';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  toCommand(): CreateProjectCommand {
    return new CreateProjectCommand(this.name);
  }
}
