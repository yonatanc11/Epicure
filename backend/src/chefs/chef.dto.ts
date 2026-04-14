export interface ChefDTO {
  id: string
  name: string
  image: string
  description?: string
}

export type Chef = ChefDTO

export class CreateChefDto {
  name: string
  image: string
  description?: string
}
