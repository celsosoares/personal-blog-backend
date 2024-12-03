import { Expose, Type } from 'class-transformer';
import { AuthorDto } from 'src/authors/dto/author.dto';

export class PostDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  createdAt: Date;

  @Expose()
  @Type(() => AuthorDto)
  author: AuthorDto;
}
