import { LABELS} from '../../constants/strings'
import { ICONS } from '../../constants/icons'
import heroImg from '../assets/images/heroPicture.png'

export default function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Epicure hero"
        className="w-full h-80 object-cover @[768px]:h-125"
      />

      <div className="absolute bottom-8 left-4 right-4 @[768px]:left-1/2 @[768px]:-translate-x-1/2 @[768px]:w-125 @[768px]:bottom-16">
        <div className="bg-white/88 rounded-md px-6 py-9 flex flex-col gap-4.5">
          <h1 className="text-h1">{LABELS.heroTitle}</h1>
          <div className="flex items-center gap-3 border border-primary rounded-md px-4 py-3">
            <img src={ICONS.search} alt="search" className="w-5 h-5 opacity-40" />
            <input
              type="text"
              placeholder={LABELS.searchPlaceholder}
              className="text-h3 w-full outline-none bg-transparent placeholder:text-gray"
            />
          </div>
        </div>
      </div>
    </section>
  )
}