import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from '../restaurants/schemas/restaurant.schema';
import { DishesController } from './dish.controller';
import { DishesService } from './dish.service';
import { Dish, DishSchema } from './schemas/dish.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Dish.name, schema: DishSchema },
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [DishesController],
  providers: [DishesService],
})
export class DishesModule {}
