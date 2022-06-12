import 'antd/dist/antd.css'
import 'styles/globals.scss'
import 'styles/override.scss'
import type { AppProps } from 'next/app'
import AppProvider from 'hooks/context/provider'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default App
