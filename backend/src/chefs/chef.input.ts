import { IsOptional, IsString } from 'class-validator'

export class CreateChefDto {
  @IsString()
  name: string

  @IsString()
  image: string

  @IsOptional()
  @IsString()
  bio?: string
}

export class UpdateChefDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  image?: string

  @IsOptional()
  @IsString()
  bio?: string
}
