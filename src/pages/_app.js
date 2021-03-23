import React from 'react'
import { Provider } from 'next-auth/client'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from '../utils/theme'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider session={pageProps.session}>
      <MuiThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </Provider>
  )
}

export default MyApp
