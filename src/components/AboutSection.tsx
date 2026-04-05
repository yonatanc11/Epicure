import { LABELS } from '../constants/strings'
import { ICONS } from '../constants/icons'

function AboutSection() {
  return (
    <section className="px-6 py-8 flex flex-col items-center">
      <img src={ICONS.logo} alt="Epicure logo" className="h-12 mb-2" />
      <span className="text-label tracking-widest mb-6">{LABELS.brandName}</span>

      <div className="flex flex-col gap-3 w-full max-w-xs mb-8">
        <a href="#" className="flex items-center justify-center gap-2 border border-primary rounded-md px-4 py-3 text-btn">
          ▶ {LABELS.getItOn} {LABELS.googlePlay}
        </a>
        <a href="#" className="flex items-center justify-center gap-2 border border-primary rounded-md px-4 py-3 text-btn">
          {LABELS.downloadOnThe} {LABELS.appStore}
        </a>
      </div>

      <div className="w-full">
        <h3 className="text-h1 mb-4">{LABELS.aboutUs}</h3>
        <p className="text-body text-gray leading-relaxed">
          {LABELS.aboutUsDescription}
        </p>
      </div>
    </section>
  )
}

export default AboutSection