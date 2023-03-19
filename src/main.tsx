import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import {Button}  from './components/atoms/button'
import {GlobalStyles} from './styles/theme/global-style'
import {lightTheme} from './styles/theme/light'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Button>
        Bom dia
      </Button>
    </ThemeProvider>
  </React.StrictMode>,
)
