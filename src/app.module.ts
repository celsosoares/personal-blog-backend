import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Author } from './authors/entities/author.entity';
// import { Post } from './posts/entities/post.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [Author, Post],
    //   synchronize: true,
    // }),
    AuthorsModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
