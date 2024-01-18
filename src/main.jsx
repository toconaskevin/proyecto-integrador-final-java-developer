import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Link } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <header>
        <Link to={'/'}>
          <div>
            <h1>Peliculas</h1>
          </div>
        </Link>
      </header>
      <main>
        <App />
      </main>
    </Router>
  </React.StrictMode>,
)
