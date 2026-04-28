import { Route, Routes} from 'react-router-dom'
import { useLocalStorageSync } from './hooks/useLocalStorageSync'
import { ShippingFormTemplate } from './utils/data'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux'
import { Modal } from './Components/Modal'
import { ShippingForm } from './Components/ShippingForm'
import { Login } from './Components/Login'
import { Suspense,lazy } from 'react'
import { Loader } from './Components/Loader';
import { ModalContext } from './Context/ModalContext'
import { CustomCursor } from './Components/CustomCursor'
import { deriveAddress } from './utils/helpers'

const Home = lazy(() =>
  import("./Pages/Home").then(module => ({ default: module.Home }))
);
const Shop = lazy(() =>
  import("./Pages/Shop").then(module => ({ default: module.Shop }))
);
const Cart = lazy(() =>
  import("./Pages/Cart").then(module => ({ default: module.Cart }))
);
const WishList = lazy(() =>
  import("./Pages/WishList").then(module => ({ default: module.WishList }))
);
const Checkout = lazy(() =>
  import("./Pages/Checkout").then(module => ({ default: module.Checkout }))
);
const OrderSummary = lazy(() =>
  import("./Pages/OrderSummary").then(module => ({ default: module.OrderSummary }))
);
const About = lazy(() =>
  import("./Pages/About").then(module => ({ default: module.About }))
);
const Product = lazy(() =>
  import("./Pages/Product").then(module => ({ default: module.Product }))
);
const Error = lazy(() =>
  import("./Pages/Error").then(module => ({ default: module.Error }))
);



function App() {
  const [theme,setTheme]=useState(JSON.parse(localStorage.getItem("theme")) || 'light')
  const [shippingFormData, setShippingFormData] = useState(JSON.parse(localStorage.getItem("shippingFormData")) || ShippingFormTemplate) ;
  const [input,setInput]=useState('') 
  const cart = useSelector(state => state.cart);
  const shippingAddress=deriveAddress(shippingFormData)
  const [name,setName]=useState("")
  const {modalOpen,setModalOpen}=useContext(ModalContext) 

  useLocalStorageSync("cart", cart);
  useLocalStorageSync("shippingFormData", shippingFormData);
  useLocalStorageSync("theme", theme);

  return (
    <div data-theme={theme} className="app">
      <CustomCursor/>

      {modalOpen && <Modal setModalOpen={setModalOpen} className={`${modalOpen}Modal`}>
        
        {modalOpen==="shipping" && <ShippingForm shippingFormData={shippingFormData} setShippingFormData={setShippingFormData}/>}

        {modalOpen==="login" && <Login setName={setName}/>} 
        
      </Modal>}

      <Navbar name={name} input={input} setInput={setInput} theme={theme} setTheme={setTheme}/>
      <div className="middle" >

        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop input={input}/>} />
            <Route path="/Cart" element={<Cart cart={cart} shippingAddress={shippingAddress} />} />
            <Route path="/wishList" element={<WishList/>}/>
            <Route path="/checkout" element={<Checkout shippingFormData={shippingFormData} shippingAddress={shippingAddress} cart={cart}/>} />
            <Route path="/Order" element={<OrderSummary shippingAddress={shippingAddress} cart={cart}/>}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Product/:name/:id" element={<Product/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>

      </div>
      
      <Footer/>

    </div>
  )
}

export default App