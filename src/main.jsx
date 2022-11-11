import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './styles/muiTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline>
          <App />
          </CssBaseline>
        </ThemeProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
