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
  async findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.authorsService.findOne(id);
  }

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.authorsService.remove(id);
  }
}
