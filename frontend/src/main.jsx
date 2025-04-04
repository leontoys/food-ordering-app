import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <AppRoutes></AppRoutes>
  </Router>,
)
