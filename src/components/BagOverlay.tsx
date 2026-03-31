import Overlay from './Overlay'
import { LABELS, EMOJIS } from '../constants/strings'

interface BagOverlayProps {
    onClose: () => void
}

function BagOverlay({ onClose }: BagOverlayProps) {
    return (
        <Overlay onClose={onClose}>
            <div className="flex flex-col items-center justify-center py-20">
                <span className="text-5xl mb-4">{EMOJIS.bag}</span>
                <p className="text-gray font-primary text-sm tracking-wider">{LABELS.emptyBag}</p>
            </div>
        </Overlay>
    )
}

export default BagOverlay