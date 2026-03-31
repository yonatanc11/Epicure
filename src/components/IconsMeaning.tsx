import { LABELS, ICON_TYPES } from '../constants/strings'

function IconsMeaning() {
    return (
        <section className="px-6 py-8 text-center">
            <h2 className="font-bold font-primary text-lg mb-6">{LABELS.iconsMeaning}</h2>
            <div className="flex flex-col items-center gap-6">
                {Object.values(ICON_TYPES).map((icon) => (
                    <div key={icon} className="flex flex-col items-center gap-2">
                        <img src={`/icons/${icon}.svg`} alt={icon} className="w-8 h-8" />
                        <span className="font-primary text-sm capitalize">{icon}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default IconsMeaning