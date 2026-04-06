import Overlay from './shared/Overlay'
import { LABELS} from '../constants/strings'
import { ICONS } from '../constants/icons'

interface SearchOverlayProps {
    onClose: () => void
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
    return (
        <Overlay onClose={onClose} title={LABELS.search}>
            <div className="flex items-center border border-gray rounded-md px-4 py-3 gap-3">
                <img src={ICONS.search} alt="search" className="w-5 h-5 opacity-40" />
                <input
                    type="text"
                    placeholder={LABELS.searchPlaceholder}
                    className="text-h1 text-gray w-full outline-none bg-transparent placeholder:text-gray"
                />
            </div>
        </Overlay>
    )
}
