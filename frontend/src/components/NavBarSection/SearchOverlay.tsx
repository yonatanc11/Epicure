import { LABELS } from '../../constants/strings'
import { ICONS } from '../../constants/icons'

interface SearchOverlayProps {
    onClose: () => void
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose} />
            <div className="absolute right-0 top-full z-50 w-screen md:w-[497px] bg-white shadow-lg p-6">
                <div className="flex items-center border border-gray rounded-md px-4 py-3 gap-3">
                    <img src={ICONS.search} alt="search" className="w-5 h-5 opacity-40" />
                    <input
                        type="text"
                        placeholder={LABELS.searchPlaceholder}
                        className="text-body w-full outline-none bg-transparent placeholder:text-gray"
                    />
                </div>
            </div>
        </>
    )
}
