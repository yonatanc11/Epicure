import { LABELS } from '../constants/strings'
import { ICONS } from '../constants/icons'
import { useMobile } from '../hooks/useMobile'

function AboutSection() {
  const isMobile = useMobile()

  return (
    <section className="px-6 py-8 flex flex-col items-center bg-bg">
      <div className={`max-w-5xl mx-auto w-full flex ${isMobile ? 'flex-col items-center' : 'flex-row items-start justify-between gap-12'}`}>
        <div className="flex-1 max-w-xl">
          <h3 className="text-h1 mb-4">{LABELS.aboutUs}</h3>
          <p className="text-body text-gray leading-relaxed mb-6">
            {LABELS.aboutUsDescription}
          </p>

          <div className={`flex gap-3 ${isMobile ? 'flex-col items-center' : 'flex-row items-start'}`}>
            <button>
              <img src={ICONS.apple} alt="Download on the App Store" />
            </button>
            <button>
              <img src={ICONS.google} alt="Get it on Google Play" />
            </button>
          </div>
        </div>

        {!isMobile && (
          <div className="shrink-0 flex items-center justify-center pl-8">
            <img src={ICONS.logoBig} alt="Epicure logo" className="w-50 lg:w-62.5" />
          </div>
        )}
      </div>
    </section>
  )
}

export default AboutSection