import type { Restaurant } from '../types/restaurant'
import claroImg from '../assets/images/restaurants/claro.png'
import claro2Img from '../assets/images/restaurants/claro 2.png'
import kabKemImg from '../assets/images/restaurants/Kab kem.png'
import kabKem2Img from '../assets/images/restaurants/Kab kem 2.png'
import messaImg from '../assets/images/restaurants/Messa.png'
import messa2Img from '../assets/images/restaurants/Messa 2.png'
import nithanThaiImg from '../assets/images/restaurants/nithan-thai.png'
import tigerLilyImg from '../assets/images/restaurants/tiger-lily.png'
import yapanImg from '../assets/images/restaurants/Yapan.png'

export const restaurants: Restaurant[] = [
  {
    id: crypto.randomUUID(),
    name: 'Claro',
    chef: 'Ran Shmueli',
    image: claroImg,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tiger Lily',
    chef: 'Yanir Green',
    image: tigerLilyImg,
  },
  {
    id: crypto.randomUUID(),
    name: 'Nithan Thai',
    chef: 'Ariel Leventhal',
    image: nithanThaiImg,
  },
  {
    id: crypto.randomUUID(),
    name: 'Kab Kem',
    chef: 'Meir Adoni',
    image: kabKemImg,
  },
  {
    id: crypto.randomUUID(),
    name: 'Messa',
    chef: 'Aviv Moshe',
    image: messaImg,
  },
  {
    id: crypto.randomUUID(),
    name: 'Yapan',
    chef: 'Yuval Ben Neriah',
    image: yapanImg,
  },
]