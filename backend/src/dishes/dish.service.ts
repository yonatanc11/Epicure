import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../restaurants/schemas/restaurant.schema';
import { Dish } from './schemas/dish.schema';
import { CreateDishDto, UpdateDishDto } from './dish.input';

@Injectable()
export class DishesService {

  constructor(
    @InjectModel(Dish.name) private dishModel: Model<Dish>,
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) { }

  async create(dto: CreateDishDto) {
    await this.assertRestaurantExists(dto.restaurantId);
    return this.dishModel.create(dto);
  }

  async update(id: string, dto: UpdateDishDto) {
    if (dto.restaurantId) await this.assertRestaurantExists(dto.restaurantId);
    const dish = await this.dishModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!dish) throw new NotFoundException(`Dish with ID ${id} not found`);
    return dish;
  }

  async remove(id: string) {
    const dish = await this.dishModel.findByIdAndDelete(id).exec();
    if (!dish) throw new NotFoundException(`Dish with ID ${id} not found`);
    return dish;
  }

  async findAll(restaurantId?: string) {
    const filter = restaurantId ? { restaurantId } : {};
    return this.dishModel.find(filter).exec();
  }

  async findById(id: string) {
    const dish = await this.dishModel.findById(id).exec();
    if (!dish) throw new NotFoundException(`Dish with ID ${id} not found`);
    return dish;
  }

  private async assertRestaurantExists(restaurantId: string) {
    const exists = await this.restaurantModel.exists({ _id: restaurantId });
    if (!exists) throw new BadRequestException(`Restaurant with ID ${restaurantId} not found`);
  }
}
