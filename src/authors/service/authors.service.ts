import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { UpdateAuthorDto } from '../dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async getAuthors() {
    return await this.authorsRepository.find();
  }

  async getAuthorById(id: string) {
    const author = await this.authorsRepository.findOneBy({ id });
    if (!author) {
      throw new NotFoundException(`Author ID ${id} not found`);
    }
    return author;
  }

  async createAuthor(createAuthorDto: CreateAuthorDto) {
    const author = this.authorsRepository.create(createAuthorDto);
    return this.authorsRepository.save(author);
  }

  async updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.authorsRepository.preload({
      ...updateAuthorDto,
      id,
    });
    if (!author) {
      throw new NotFoundException(`Author ID ${id} not found`);
    }
    return this.authorsRepository.save(author);
  }

  async removeAuthorById(id: string) {
    return await this.authorsRepository.delete(id);
  }
}
