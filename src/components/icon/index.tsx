import Back from 'assets/icons/Button Back.svg'
import Location from 'assets/icons/Location.svg'
import DropDown from 'assets/icons/Dropdown.svg'
import Search from 'assets/icons/Search.svg'
import Cancel from 'assets/icons/Cancel.svg'
import Plus from 'assets/icons/Add.svg'
import Minus from 'assets/icons/Minus.svg'
import Star from 'assets/icons/Star.svg'
import History from 'assets/icons/History.svg'
import Info from 'assets/icons/info.svg'
import Leaf from 'assets/icons/Leaf.svg'
import Down from 'assets/icons/Down.svg'
import RewardIcon from 'assets/icons/RewardIcon.svg'

export type IconName =
  | 'back'
  | 'location'
  | 'dropdown'
  | 'search'
  | 'cancel'
  | 'plus'
  | 'minus'
  | 'star'
  | 'history'
  | 'info'
  | 'leaf'
  | 'down'
  | 'reward'

interface Props {
  className?: string
  dimension?: number
  viewBox?: string
  name: IconName
}

const icons: { [key in IconName]: any } = {
  back: Back,
  location: Location,
  dropdown: DropDown,
  search: Search,
  cancel: Cancel,
  plus: Plus,
  minus: Minus,
  star: Star,
  history: History,
  info: Info,
  leaf: Leaf,
  down: Down,
  reward: RewardIcon,
}

const AppIcon = ({ className, dimension = 24, name, viewBox }: Props) => {
  const Icon = icons[name]
  return <Icon className={className} width={dimension} height={dimension} viewBox={viewBox || '0 0 24 24'} />
}

export default AppIcon
