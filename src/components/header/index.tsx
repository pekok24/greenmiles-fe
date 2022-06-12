import AppIcon from 'components/icon'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <div className="bg-primary-dark p-4 pt-10 flex items-center gap-3">
      <AppIcon name="back" dimension={18} viewBox="0 0 10 18" />
      <div className="text-white text-base">{children}</div>
    </div>
  )
}

export default Header
