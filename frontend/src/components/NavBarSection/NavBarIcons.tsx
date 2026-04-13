import { ICONS } from '../../constants/icons'
import IconButton from '../IconButton'

interface HeaderIconsProps {
  onSearchClick: () => void
  onBagClick: () => void
}

function NavBarIcons({ onSearchClick, onBagClick }: HeaderIconsProps) {
  return (
    <div className="flex items-center gap-4">
      <IconButton icon={ICONS.search} alt="search" onClick={onSearchClick} />
      <IconButton icon={ICONS.user} alt="user" />
      <IconButton icon={ICONS.bag} alt="bag" onClick={onBagClick} />
    </div>
  )
}

export default NavBarIcons
