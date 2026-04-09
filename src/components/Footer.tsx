import { NAV_LINKS } from '../constants/navigation'

function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="max-w-5xl mx-auto w-full">
      <nav className="flex flex-col gap-6">
        {NAV_LINKS.secondary.map((link) => (
          <a key={link.path} href={link.path} className="text-body">
            {link.label}
          </a>
        ))}
      </nav>
      </div>
    </footer>
  )
}

export default Footer