export interface NavLink {
  label: string
  path: string
}

export const NAV_LINKS = {
  primary: [
    { label: 'Restaurants', path: '/restaurants' },
    { label: 'Chefs', path: '/chefs' },
  ],
  secondary: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Term of Use', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
  ],
}