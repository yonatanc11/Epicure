import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (_doc, ret: Record<string, any>) => {
      ret.id = ret._id;
      delete ret._id;
    },
  },
})
export class Dish extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  ingredients: string;

  @Prop({ type: String, enum: ['spicy', 'vegetarian', 'vegan'] })
  icon?: 'spicy' | 'vegetarian' | 'vegan';

  @Prop({ type: Number, required: true, min: 0 })
  price: number;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: Types.ObjectId, ref: 'Restaurant', required: true, index: true })
  restaurantId: Types.ObjectId;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
