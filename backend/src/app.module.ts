import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChefsModule } from './chefs/chef.module';
import { DishesModule } from './dishes/dish.module';
import { RestaurantsModule } from './restaurants/restaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    ChefsModule,
    RestaurantsModule,
    DishesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}