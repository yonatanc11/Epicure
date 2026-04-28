import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../restaurants/schemas/restaurant.schema';
import { Chef } from './schemas/chef.schema';
import { CreateChefDto, UpdateChefDto } from './chef.input';

@Injectable()
export class ChefsService {

  constructor(
    @InjectModel(Chef.name) private chefModel: Model<Chef>,
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) { }

  async create(dto: CreateChefDto) {
    return this.chefModel.create(dto);
  }

  async update(id: string, dto: UpdateChefDto) {
    const chef = await this.chefModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!chef) throw new NotFoundException(`Chef with ID ${id} not found`);
    return chef;
  }

  async remove(id: string) {
    const referenced = await this.restaurantModel.countDocuments({ chefId: id });
    if (referenced > 0) {
      throw new ConflictException(
        `Chef with ID ${id} is referenced by ${referenced} restaurant(s); delete them first`,
      );
    }
    const chef = await this.chefModel.findByIdAndDelete(id).exec();
    if (!chef) throw new NotFoundException(`Chef with ID ${id} not found`);
    return chef;
  }

  async findAll() {
    return this.chefModel.find().exec();
  }

  async findById(id: string) {
    const chef = await this.chefModel.findById(id).exec();
    if (!chef) throw new NotFoundException(`Chef with ID ${id} not found`);
    return chef;
  }
}