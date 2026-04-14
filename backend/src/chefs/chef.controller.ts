import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ChefsService } from './chef.service';
import { CreateChefDto } from './chef.dto';

@Controller('api/chefs') 
export class ChefsController {
  
  constructor(private readonly chefsService: ChefsService) {}

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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.chefsService.remove(id);
  }
}