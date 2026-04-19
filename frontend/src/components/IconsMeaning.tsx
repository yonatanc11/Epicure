import { LABELS, ICON_TYPES } from '../constants/strings'
import { ICONS } from '../constants/icons'
import { useMobile } from '../hooks/useMobile'

function IconsMeaning() {
    const isMobile = useMobile()

    return (
        <section className="px-6 py-8 text-center bg-bg">
            <h2 className={`mb-6 ${isMobile ? 'text-h2' : 'desktop-text-h2'}`}>{LABELS.iconsMeaning}</h2>
            <div className={`flex items-center ${isMobile ? 'flex-col gap-6' : 'flex-row justify-center gap-10'}`}>
                {Object.values(ICON_TYPES).map((icon) => (
                    <div key={icon} className="flex flex-col items-center gap-2">
                        <img src={ICONS[`${icon}Big` as keyof typeof ICONS]} alt={icon} />
                        <span className={`capitalize ${isMobile ? 'text-body' : 'desktop-text-body'}`}>{icon}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default IconsMeaning