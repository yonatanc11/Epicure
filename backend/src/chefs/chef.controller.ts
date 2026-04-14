import { Controller, Get, Param } from '@nestjs/common';
import { ChefsService } from './chef.service';

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
}