import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyled from './globalStyle/globalStyle.js';
import Home from './pages/Home/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <Home />
  </StrictMode>,
)
