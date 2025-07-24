import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ScrollToTop from './Components/ScrollToTop.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/eshop'>
      <Provider store={store}>
        <ScrollToTop/>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
