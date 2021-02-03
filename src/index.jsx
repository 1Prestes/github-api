import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import ResetCSS from './ResetCSS'
import GlobalStyle from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
