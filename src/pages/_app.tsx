import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../theme'
import UserUpdater from '../state/user/updater'
import store from '../state'

const Updaters = () => {
  return (
    <>
      <UserUpdater />
    </>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>FleetDAO</title>
      </Head>
      <FixedGlobalStyle />
      <Provider store={store}>
        <Updaters />
        <ThemeProvider>
          <ThemedGlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default appWithTranslation(App)
