import { Module } from '@nestjs/common';
import { PostsService } from './service/posts.service';
import { PostsController } from './controller/posts.controller';
import { Author } from 'src/authors/entities/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Post])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
