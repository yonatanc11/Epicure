import { LABELS } from '../constants/strings'
import { ICONS } from '../constants/icons'

function AboutSection() {
  return (
    <section className="px-6 py-8 flex flex-col items-center">
      <img src={ICONS.logo} alt="Epicure logo" className="h-12 mb-2" />
      <span className="font-primary text-sm tracking-widest mb-6">{LABELS.brandName}</span>

      <div className="flex flex-col gap-3 w-full max-w-xs mb-8">
        <a href="#" className="flex items-center justify-center gap-2 border border-primary rounded-md px-4 py-3 font-primary text-sm">
          ▶ {LABELS.getItOn} {LABELS.googlePlay}
        </a>
        <a href="#" className="flex items-center justify-center gap-2 border border-primary rounded-md px-4 py-3 font-primary text-sm">
          {LABELS.downloadOnThe} {LABELS.appStore}
        </a>
      </div>

      <div className="w-full">
        <h3 className="font-bold font-primary text-sm mb-4">{LABELS.aboutUs}</h3>
        <p className="font-primary text-sm text-gray leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
        </p>
      </div>
    </section>
  )
}

export default AboutSection