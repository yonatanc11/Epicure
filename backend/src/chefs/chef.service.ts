import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chef } from './schemas/chef.schema';

@Injectable() 
export class ChefsService {
  
  constructor(@InjectModel(Chef.name) private chefModel: Model<Chef>) {}

  async findAll() {
    return this.chefModel.find().exec();
  }

  async findById(id: string) {
    const chef = await this.chefModel.findById(id).exec();
    if (!chef) throw new NotFoundException(`Chef with ID ${id} not found`);
    return chef;
  }
}