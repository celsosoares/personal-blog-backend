import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { UpdateAuthorDto } from '../dto/update-author.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Author } from '../entities/author.entity';
// import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  // constructor(
  //   @InjectRepository(Author)
  //   private authorsRepository: Repository<Author>,
  // ) {}

  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author' + createAuthorDto;
  }

  findAll() {
    // return this.authorsRepository.find();
    return 'Print findAll';
  }

  // findOne(id: string) {
  findOne() {
    // return this.authorsRepository.findOneBy({ id });
    return 'Print findOne';
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author` + updateAuthorDto;
  }

  // remove(id: string) {
  remove() {
    // return this.authorsRepository.delete(id);
    return 'Print remove';
  }
}
