import { NAV_LINKS } from '../constants/navigation'

interface HamburgerMenuProps {
  onClose: () => void
}

export default function HamburgerMenu({ onClose }: HamburgerMenuProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6">
      <button onClick={onClose} className="text-2xl mb-10">✕</button>

      <nav className="flex flex-col gap-4 mb-8">
        {NAV_LINKS.primary.map((link) => (
          <a key={link.path} href={link.path} className="text-xl font-primary">
            {link.label}
          </a>
        ))}
      </nav>

      <hr className="border-gray mb-8" />

      <nav className="flex flex-col gap-6">
        {NAV_LINKS.secondary.map((link) => (
          <a key={link.path} href={link.path} className="text-xl font-primary">
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

