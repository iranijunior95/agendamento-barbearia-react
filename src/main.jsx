import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import GlobalStyled from './global/globalStyle.js';
import Home from './pages/Home/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
