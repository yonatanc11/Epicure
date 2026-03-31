import { useState } from 'react'
import { NAV_LINKS } from '../constants/navigation'
import { LABELS, EMOJIS } from '../constants/strings'
import HamburgerMenu from './HamburgerMenu'
import SearchOverlay from './SearchOverlay'
import BagOverlay from './BagOverlay'

type Overlay = 'menu' | 'search' | 'bag' | null

function Header() {
    const [overlay, setOverlay] = useState<Overlay>(null)

    const closeOverlay = () => setOverlay(null)

    return (
        <header className="@container relative">
            <div className="flex items-center justify-between px-6 py-4 @[768px]:hidden">
                <button onClick={() => setOverlay('menu')} className="text-2xl">{EMOJIS.menu}</button>
                <span className="text-2xl">{EMOJIS.logo}</span>
                <div className="flex items-center gap-4 text-xl">
                    <button onClick={() => setOverlay('search')}>{EMOJIS.search}</button>
                    <button>{EMOJIS.user}</button>
                    <button onClick={() => setOverlay('bag')}>{EMOJIS.bag}</button>
                </div>
            </div>

            <div className="hidden @[768px]:flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-6">
                    <span className="text-2xl">{EMOJIS.logo}</span>
                    <span className="font-bold font-primary tracking-widest text-sm">{LABELS.brandName}</span>
                    <nav className="flex items-center gap-6">
                        {NAV_LINKS.primary.map((link) => (
                            <a key={link.path} href={link.path} className="font-primary text-sm">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4 text-xl">
                    <button onClick={() => setOverlay('search')}>{EMOJIS.search}</button>
                    <button>{EMOJIS.user}</button>
                    <button onClick={() => setOverlay('bag')}>{EMOJIS.bag}</button>
                </div>
            </div>

            {overlay === 'menu' && <HamburgerMenu onClose={closeOverlay} />}
            {overlay === 'search' && <SearchOverlay onClose={closeOverlay} />}
            {overlay === 'bag' && <BagOverlay onClose={closeOverlay} />}
        </header>
    )
}

export default Header