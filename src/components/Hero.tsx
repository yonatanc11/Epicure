import { LABELS} from '../constants/strings'
import { ICONS } from '../constants/icons'
import heroImg from '../assets/images/heroPicture.png'

function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Epicure hero"
        className="w-full h-80 object-cover @[768px]:h-125"
      />

      <div className="absolute bottom-8 left-4 right-4 @[768px]:left-1/2 @[768px]:-translate-x-1/2 @[768px]:w-125 @[768px]:bottom-16">
        <h1 className="text-2xl font-bold font-primary mb-4 @[768px]:text-3xl @[768px]:text-center">
          {LABELS.heroTitle}
        </h1>

        <div className="flex items-center bg-white/90 rounded-md px-4 py-3 gap-3">
          <span className="text-gray">{ICONS.search}</span>
          <input
            type="text"
            placeholder={LABELS.searchPlaceholder}
            className="w-full outline-none font-primary text-sm bg-transparent"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero