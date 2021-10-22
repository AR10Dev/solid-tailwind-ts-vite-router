import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import App from './app'
import './index.css'
render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
)
