import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chef } from '../chefs/schemas/chef.schema';
import { Dish } from '../dishes/schemas/dish.schema';
import { Restaurant } from './schemas/restaurant.schema';
import { CreateRestaurantDto, UpdateRestaurantDto } from './restaurant.input';

@Injectable()
export class RestaurantsService {

  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
    @InjectModel(Chef.name) private chefModel: Model<Chef>,
    @InjectModel(Dish.name) private dishModel: Model<Dish>,
  ) { }

  async create(dto: CreateRestaurantDto) {
    await this.assertChefExists(dto.chefId);
    return this.restaurantModel.create(dto);
  }

  async update(id: string, dto: UpdateRestaurantDto) {
    if (dto.chefId) await this.assertChefExists(dto.chefId);
    const restaurant = await this.restaurantModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!restaurant) throw new NotFoundException(`Restaurant with ID ${id} not found`);
    return restaurant;
  }

  async remove(id: string) {
    const restaurant = await this.restaurantModel.findByIdAndDelete(id).exec();
    if (!restaurant) throw new NotFoundException(`Restaurant with ID ${id} not found`);
    await this.dishModel.deleteMany({ restaurantId: id }).exec();
    return restaurant;
  }

  async findAll(chefId?: string) {
    const filter = chefId ? { chefId } : {};
    return this.restaurantModel.find(filter).exec();
  }

  async findById(id: string) {
    const restaurant = await this.restaurantModel.findById(id).exec();
    if (!restaurant) throw new NotFoundException(`Restaurant with ID ${id} not found`);
    return restaurant;
  }

  private async assertChefExists(chefId: string) {
    const exists = await this.chefModel.exists({ _id: chefId });
    if (!exists) throw new BadRequestException(`Chef with ID ${chefId} not found`);
  }
}
