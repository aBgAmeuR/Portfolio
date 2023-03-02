import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ProjetPage from './ProjetPage'
import data from './assets/data.json'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <ProjetPage data={data[0]} />
  </React.StrictMode>,
)
