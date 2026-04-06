import { useState } from 'react'
import { NAV_LINKS } from '../../constants/navigation'
import { LABELS } from '../../constants/strings'
import { ICONS } from '../../constants/icons'
import HamburgerMenu from './HamburgerMenu'
import SearchOverlay from '../SearchOverlay'
import BagOverlay from '../BagOverlay'
import IconButton from '../IconButton'
import NavBarIcons from './NavBarIcons'
import { useMobile } from '../../hooks/useMobile'

type Overlay = 'menu' | 'search' | 'bag' | null

export default function Header() {
    const [overlay, setOverlay] = useState<Overlay>(null)
    const isMobile = useMobile()

    const closeOverlay = () => setOverlay(null)

    return (
        <header className="relative">
            {isMobile ? (
                <div className="flex items-center justify-between px-6 py-4">
                    <IconButton icon={ICONS.hamburger} alt="menu" onClick={() => setOverlay('menu')} />
                    <img src={ICONS.logo} alt="Epicure logo" className="h-8" />
                    <NavBarIcons onSearchClick={() => setOverlay('search')} onBagClick={() => setOverlay('bag')} />
                </div>
            ) : (
                <div className="flex items-center justify-between px-10 py-4">
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
                    <NavBarIcons onSearchClick={() => setOverlay('search')} onBagClick={() => setOverlay('bag')} />
                </div>
            )}

            {overlay === 'menu' && <HamburgerMenu onClose={closeOverlay} />}
            {overlay === 'search' && <SearchOverlay onClose={closeOverlay} />}
            {overlay === 'bag' && <BagOverlay onClose={closeOverlay} />}
        </header>
    )
}
