import { createRoot } from 'react-dom/client'
import { GlobalState }from './Context/GlobalState';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <App />
  </GlobalState>
)
