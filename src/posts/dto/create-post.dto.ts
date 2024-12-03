import { IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsUUID()
  authorId: string;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
