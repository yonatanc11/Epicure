import Overlay from './Overlay'
import { LABELS} from '../constants/strings'
import { ICONS } from '../constants/icons'

interface SearchOverlayProps {
    onClose: () => void
}

function SearchOverlay({ onClose }: SearchOverlayProps) {
    return (
        <Overlay onClose={onClose} title={LABELS.search}>
            <div className="flex items-center border border-gray rounded-md px-4 py-3 gap-3">
                <span className="text-gray">{ICONS.search}</span>
                <input
                    type="text"
                    placeholder={LABELS.searchPlaceholder}
                    className="w-full outline-none font-primary text-sm"
                />
            </div>
        </Overlay>
    )
}

export default SearchOverlay