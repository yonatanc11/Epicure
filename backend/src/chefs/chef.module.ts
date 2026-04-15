import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChefsController } from './chef.controller';
import { ChefsService } from './chef.service';
import { Chef, ChefSchema } from './schemas/chef.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chef.name, schema: ChefSchema }])
  ],
  controllers: [ChefsController],
  providers: [ChefsService]
})
export class ChefsModule {}