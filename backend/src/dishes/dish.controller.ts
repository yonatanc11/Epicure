import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DishesService } from './dish.service';
import { CreateDishDto, UpdateDishDto } from './dish.input';

@Controller('api/dishes')
export class DishesController {

  constructor(private readonly dishesService: DishesService) { }

  @Get()
  async getAll(@Query('restaurantId') restaurantId?: string) {
    return this.dishesService.findAll(restaurantId);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.dishesService.findById(id);
  }

  @Post()
  async create(@Body() dto: CreateDishDto) {
    return this.dishesService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDishDto) {
    return this.dishesService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.dishesService.remove(id);
  }
}
