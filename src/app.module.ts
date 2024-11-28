import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthorsModule, PostsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
