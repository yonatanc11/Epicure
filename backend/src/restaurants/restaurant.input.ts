import { IsMongoId, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator'

export class CreateRestaurantDto {
  @IsString()
  name: string

  @IsString()
  image: string

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number

  @IsMongoId()
  chefId: string
}

export class UpdateRestaurantDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  image?: string

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  rating?: number

  @IsOptional()
  @IsMongoId()
  chefId?: string
}
