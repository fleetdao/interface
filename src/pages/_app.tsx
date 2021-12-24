import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../theme'
import BaseLayout from '../layouts/Base'
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
    <BaseLayout>
      <>
        <FixedGlobalStyle />
        <Provider store={store}>
          <Updaters />
          <ThemeProvider>
            <ThemedGlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    </BaseLayout>
  )
}

export default appWithTranslation(App)
