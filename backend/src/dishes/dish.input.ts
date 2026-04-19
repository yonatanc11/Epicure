import { IsEnum, IsMongoId, IsNumber, IsOptional, IsString, Min } from 'class-validator'

const DISH_ICONS = ['spicy', 'vegetarian', 'vegan'] as const
type DishIcon = typeof DISH_ICONS[number]

export class CreateDishDto {
  @IsString()
  name: string

  @IsString()
  ingredients: string

  @IsOptional()
  @IsEnum(DISH_ICONS)
  icon?: DishIcon

  @IsNumber()
  @Min(0)
  price: number

  @IsString()
  image: string

  @IsMongoId()
  restaurantId: string
}

export class UpdateDishDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  ingredients?: string

  @IsOptional()
  @IsEnum(DISH_ICONS)
  icon?: DishIcon

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number

  @IsOptional()
  @IsString()
  image?: string

  @IsOptional()
  @IsMongoId()
  restaurantId?: string
}
