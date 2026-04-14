import type { ChefDTO, RestaurantDTO, DishDTO } from '@epicure/shared'

async function get<T>(path: string): Promise<T> {
  const res = await fetch(path)
  if (!res.ok) throw new Error(`${path} → ${res.status}`)
  return res.json() as Promise<T>
}

export const api = {
  chefs: {
    list: () => get<ChefDTO[]>('/api/chefs'),
    byId: (id: string) => get<ChefDTO>(`/api/chefs/${id}`),
  },
  restaurants: {
    list: () => get<RestaurantDTO[]>('/api/restaurants'),
    byId: (id: string) => get<RestaurantDTO>(`/api/restaurants/${id}`),
  },
  dishes: {
    list: () => get<DishDTO[]>('/api/dishes'),
    byId: (id: string) => get<DishDTO>(`/api/dishes/${id}`),
  },
}
