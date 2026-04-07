import { LABELS } from '../../constants/strings'
import { ICONS } from '../../constants/icons'
import { useMobile } from '../../hooks/useMobile'
import heroImg from '../../assets/images/heroPicture.png'

export default function Hero() {
  const isMobile = useMobile()

  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Epicure hero"
        className={`w-full object-cover ${isMobile ? 'h-80' : 'h-125'}`}
      />

      <div className={`absolute inset-0 flex items-center justify-center ${isMobile ? 'px-4' : 'px-[20%]'}`}>
        <div className={`bg-white/88 rounded-md w-full px-[5%] py-[3%] flex flex-col items-center gap-[3%] ${isMobile ? 'max-w-xl' : 'max-w-2xl'}`}>
          <h1 className={`${isMobile ? 'text-h1' : 'desktop-text-h1'} text-center`}>{LABELS.heroTitle}</h1>
          <div className="flex items-center gap-3 border border-primary rounded-md px-4 py-2 w-full">
            <img src={ICONS.search} alt="search" className="w-5 h-5" />
            <input
              type="text"
              placeholder={LABELS.searchPlaceholder}
              className={`w-full ${isMobile ? 'text-body' : 'desktop-text-body'}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}