import Overlay from './shared/Overlay'
import { LABELS} from '../constants/strings'
import { ICONS } from '../constants/icons'

interface BagOverlayProps {
    onClose: () => void
}

function BagOverlay({ onClose }: BagOverlayProps) {
    return (
        <Overlay onClose={onClose}>
            <div className="flex flex-col items-center justify-center py-20">
                <img src={ICONS.bag} alt="bag" className="w-12 mb-4" />
                <p className="text-gray font-primary text-sm tracking-wider">{LABELS.emptyBag}</p>
            </div>
        </Overlay>
    )
}

export default BagOverlay