import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Chef, ChefSchema } from '../chefs/schemas/chef.schema';
import { Dish, DishSchema } from '../dishes/schemas/dish.schema';
import { RestaurantsController } from './restaurant.controller';
import { RestaurantsService } from './restaurant.service';
import { Restaurant, RestaurantSchema } from './schemas/restaurant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: Chef.name, schema: ChefSchema },
      { name: Dish.name, schema: DishSchema },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
