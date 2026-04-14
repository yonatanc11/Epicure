import { LABELS } from '../../constants/strings'
import { ICONS } from '../../constants/icons'

interface BagOverlayProps {
    onClose: () => void
}

function BagOverlay({ onClose }: BagOverlayProps) {
    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose} />
            <div className="absolute right-0 top-full z-50 w-screen h-87.5 md:w-124.25 md:h-146.5 bg-white shadow-lg flex flex-col items-center justify-center">
                <img src={ICONS.bag} alt="bag" className="w-10 mb-3" />
                <p className="text-label mb-8">{LABELS.emptyBag}</p>
                <button className="border border-primary px-8 py-2 text-label transition-colors hover:bg-primary hover:text-white">
                    {LABELS.orderHistory}
                </button>
            </div>
        </>
    )
}

export default BagOverlay
