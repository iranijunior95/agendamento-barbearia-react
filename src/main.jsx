import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from './global/globalStyle.js';
import Home from './pages/Home/index.jsx';
import Appointments from './pages/Appointments/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/appointments' element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
