import { NAV_LINKS } from '../constants/navigation'

function Footer() {
  return (
    <footer className="px-6 py-8">
      <nav className="flex flex-col gap-6">
        {NAV_LINKS.secondary.map((link) => (
          <a key={link.path} href={link.path} className="font-primary text-sm">
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer