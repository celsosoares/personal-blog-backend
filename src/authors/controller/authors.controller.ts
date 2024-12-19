import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from '../service/authors.service';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { UpdateAuthorDto } from '../dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  async getAuthors() {
    return this.authorsService.getAuthors();
  }

  @Get(':id')
  async getAuthorById(@Param('id') id: string) {
    return this.authorsService.getAuthorById(id);
  }

  @Post()
  async createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.createAuthor(createAuthorDto);
  }

  @Patch(':id')
  async updateAuthor(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorsService.updateAuthor(id, updateAuthorDto);
  }

  @Delete(':id')
  async removeAuthorById(@Param('id') id: string) {
    return this.authorsService.removeAuthorById(id);
  }
}
