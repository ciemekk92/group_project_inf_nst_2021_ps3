import { IssueType } from '../../../out/persistence/issue/IssueType';
import { IssueStatus } from '../../../out/persistence/issue/IssueStatus';
import { IsDefined, IsEnum, IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ValidationMessage } from '../../ValidationMessages';

export class IssueRequestDto {
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  @IsDefined({ message: ValidationMessage.NOT_EMPTY })
  description: string;

  @IsUUID(4, { message: ValidationMessage.UUID })
  @IsDefined({ message: ValidationMessage.NOT_EMPTY })
  projectId: UUID;

  @IsEnum(IssueType, { message: ValidationMessage.ENUM })
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsDefined({ message: ValidationMessage.NOT_EMPTY })
  type: IssueType;

  @IsEnum(IssueStatus, { message: ValidationMessage.ENUM })
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsDefined({ message: ValidationMessage.NOT_EMPTY })
  status: IssueStatus;

  @IsInt({ message: ValidationMessage.NUMBER })
  @IsDefined({ message: ValidationMessage.NOT_EMPTY })
  timeSpentInHours: number;

  @IsUUID(4, { message: ValidationMessage.UUID })
  assigneeId?: UUID;

  @IsUUID(4, { message: ValidationMessage.UUID })
  parentId?: UUID;

  @IsInt({ message: ValidationMessage.NUMBER })
  timeEstimatedInHours?: number;
}
