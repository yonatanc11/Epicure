import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChefsService } from './chef.service';
import { CreateChefDto, UpdateChefDto } from './chef.input';

@Controller('api/chefs')
export class ChefsController {

  constructor(private readonly chefsService: ChefsService) { }

  @Get()
  async getAll() {
    return this.chefsService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.chefsService.findById(id);
  }

  @Post()
  async create(@Body() dto: CreateChefDto) {
    return this.chefsService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateChefDto) {
    return this.chefsService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.chefsService.remove(id);
  }
}