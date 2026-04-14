import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chef } from './schemas/chef.schema';
import { CreateChefDto } from './chef.dto';

@Injectable()
export class ChefsService {

  constructor(@InjectModel(Chef.name) private chefModel: Model<Chef>) {}

  async create(dto: CreateChefDto) {
    return this.chefModel.create(dto);
  }

  async remove(id: string) {
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