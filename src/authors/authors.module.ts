import { Module } from '@nestjs/common';
import { AuthorsService } from './service/authors.service';
import { AuthorsController } from './controller/authors.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Author } from './entities/author.entity';
// import { Post } from 'src/posts/entities/post.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Author, Post])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
