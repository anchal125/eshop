import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './App.css'
import { Stairs } from './Components/Stairs.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ScrollToTop from './Components/ScrollToTop.js';
import { ToastContainer } from 'react-toastify';
import { ModalContextProvider } from './Context/ModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalContextProvider>
          <ScrollToTop />
          <Stairs>
            <App />
          </Stairs>
          <ToastContainer
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            draggable
            pauseOnHover
            style={{ marginTop: 0 }} />
        </ModalContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
) 
