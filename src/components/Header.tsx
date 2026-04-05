import { useState } from 'react'
import { NAV_LINKS } from '../constants/navigation'
import { LABELS } from '../constants/strings'
import { ICONS } from '../constants/icons'
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
                <button onClick={() => setOverlay('menu')}>
                    <img src={ICONS.hamburger} alt="menu" className="w-6 h-6" />
                </button>
                <img src={ICONS.logo} alt="Epicure logo" className="h-8" />
                <div className="flex items-center gap-4">
                    <button onClick={() => setOverlay('search')}>
                        <img src={ICONS.search} alt="search" className="w-6 h-6" />
                    </button>
                    <button>
                        <img src={ICONS.user} alt="user" className="w-6 h-6" />
                    </button>
                    <button onClick={() => setOverlay('bag')}>
                        <img src={ICONS.bag} alt="bag" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="hidden @[768px]:flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-6">
                    <img src={ICONS.logo} alt="Epicure logo" className="h-8" />
                    <span className="text-h2">{LABELS.brandName}</span>
                    <nav className="flex items-center gap-6">
                        {NAV_LINKS.primary.map((link) => (
                            <a key={link.path} href={link.path} className="text-body">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => setOverlay('search')}>
                        <img src={ICONS.search} alt="search" className="w-6 h-6" />
                    </button>
                    <button>
                        <img src={ICONS.user} alt="user" className="w-6 h-6" />
                    </button>
                    <button onClick={() => setOverlay('bag')}>
                        <img src={ICONS.bag} alt="bag" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {overlay === 'menu' && <HamburgerMenu onClose={closeOverlay} />}
            {overlay === 'search' && <SearchOverlay onClose={closeOverlay} />}
            {overlay === 'bag' && <BagOverlay onClose={closeOverlay} />}
        </header>

    )
}

export default Header