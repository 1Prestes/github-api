import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import ResetCSS from './ResetCSS.js'
import GlobalStyle from './GlobalStyles.js'

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
