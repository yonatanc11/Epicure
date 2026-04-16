import type { ChefDTO, RestaurantDTO, DishDTO } from '../types'

/* ── raw backend response shapes ── */

interface ChefRaw {
  id: string
  name: string
  image: string
  bio?: string
}

interface RestaurantRaw {
  id: string
  name: string
  image: string
  rating: number
  chefId: string
}

/* ── helpers ── */

async function get<T>(path: string): Promise<T> {
  const res = await fetch(path)
  if (!res.ok) throw new Error(`${path} → ${res.status}`)
  return res.json() as Promise<T>
}

/* ── public API ── */

export const api = {
  chefs: {
    list: () => get<ChefDTO[]>('/api/chefs'),
    byId: async (id: string): Promise<ChefDTO> => {
      const chef = await get<ChefRaw>(`/api/chefs/${id}`)
      const rawRestaurants = await get<RestaurantRaw[]>(
        `/api/restaurants?chefId=${chef.id}`,
      )
      return {
        ...chef,
        restaurants: rawRestaurants.map((r) => ({
          id: r.id,
          name: r.name,
          image: r.image,
          rating: r.rating,
          chef: chef.name,
        })),
      }
    },
  },
  restaurants: {
    list: async (): Promise<RestaurantDTO[]> => {
      const [rawRestaurants, chefs] = await Promise.all([
        get<RestaurantRaw[]>('/api/restaurants'),
        get<ChefRaw[]>('/api/chefs'),
      ])
      const chefMap = new Map(chefs.map((c) => [c.id, c.name]))
      return rawRestaurants.map((r) => ({
        id: r.id,
        name: r.name,
        image: r.image,
        rating: r.rating,
        chef: chefMap.get(r.chefId) ?? '',
      }))
    },
    byId: async (id: string): Promise<RestaurantDTO> => {
      const r = await get<RestaurantRaw>(`/api/restaurants/${id}`)
      const chef = await get<ChefRaw>(`/api/chefs/${r.chefId}`)
      return {
        id: r.id,
        name: r.name,
        image: r.image,
        rating: r.rating,
        chef: chef.name,
      }
    },
  },
  dishes: {
    list: () => get<DishDTO[]>('/api/dishes'),
    byId: (id: string) => get<DishDTO>(`/api/dishes/${id}`),
  },
}
