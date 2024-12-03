import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post.entity';
import { Repository } from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { PostDto } from '../dto/post.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async findAll(): Promise<PostDto[]> {
    const result = await this.postsRepository.find();
    return plainToInstance(PostDto, result, { excludeExtraneousValues: true });
  }

  async findOne(id: string) {
    const post = await this.postsRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException(`Post ID ${id} not found`);
    }
    return post;
  }

  async create(createPostDto: CreatePostDto) {
    const { authorId, ...postData } = createPostDto;

    const author = await this.authorsRepository.findOneBy({ id: authorId });
    if (!author) {
      throw new NotFoundException(`Author ID ${authorId} not found`);
    }

    const post = this.postsRepository.create({
      ...postData,
      author,
    });

    return this.postsRepository.save(post);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postsRepository.preload({
      ...updatePostDto,
      id,
    });
    if (!post) {
      throw new NotFoundException(`Post ID ${id} not found`);
    }
    return this.postsRepository.save(post);
  }

  async remove(id: string) {
    return await this.postsRepository.delete(id);
  }
}
