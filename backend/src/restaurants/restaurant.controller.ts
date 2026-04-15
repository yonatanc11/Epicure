import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurant.service';
import { CreateRestaurantDto, UpdateRestaurantDto } from './restaurant.input';

@Controller('api/restaurants')
export class RestaurantsController {

  constructor(private readonly restaurantsService: RestaurantsService) { }

  @Get()
  async getAll(@Query('chefId') chefId?: string) {
    return this.restaurantsService.findAll(chefId);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.restaurantsService.findById(id);
  }

  @Post()
  async create(@Body() dto: CreateRestaurantDto) {
    return this.restaurantsService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateRestaurantDto) {
    return this.restaurantsService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.restaurantsService.remove(id);
  }
}
