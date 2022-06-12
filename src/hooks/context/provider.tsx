import { ReactNode } from 'react'
import AppContext, { useAppContext } from '.'

interface Props {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  const appContext = useAppContext()
  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
}

export default AppProvider
