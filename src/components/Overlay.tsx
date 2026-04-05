import type { ReactNode } from 'react'
import { ICONS } from '../constants/icons'  

interface OverlayProps {
    onClose: () => void
    children: ReactNode
    title?: string
}

function Overlay({ onClose, children, title }: OverlayProps) {
    return (
        <div className="fixed inset-0 bg-white z-50 p-6 shadow-md">
            <div className="flex items-center justify-between mb-10">
                <button onClick={onClose} className="text-2xl">{ICONS.close}</button>
                {title && <span className="text-lg font-primary font-bold">{title}</span>}
                {title && <div className="w-6" />}
            </div>
            {children}
        </div>
    )
}

export default Overlay