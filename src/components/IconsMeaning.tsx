import { LABELS, ICON_TYPES } from '../constants/strings'
import { ICONS } from '../constants/icons'

function IconsMeaning() {
    return (
        <section className="px-6 py-8 text-center">
            <h2 className="text-h2 mb-6">{LABELS.iconsMeaning}</h2>
            <div className="flex flex-col items-center gap-6">
                {Object.values(ICON_TYPES).map((icon) => (
                    <div key={icon} className="flex flex-col items-center gap-2">
                        <img src={ICONS[`${icon}Big` as keyof typeof ICONS]} alt={icon} className="w-8 h-8" />
                        <span className="text-body capitalize">{icon}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default IconsMeaning