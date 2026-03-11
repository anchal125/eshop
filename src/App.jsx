import { Route, Routes} from 'react-router-dom'
import { useLocalStorageSync } from './hooks/UseLocalStorageSync'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useModal } from './hooks/useModal'
import { Modal } from './Components/Modal'
import { ShippingForm } from './Components/ShippingForm'
import { Login } from './Components/Login'
import { Suspense,lazy } from 'react'
import { Loader } from './Components/Loader';

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
  const {modalOpen,setModalOpen,formData,setFormData,modalType,setModalType}=useModal()
  const [input,setInput]=useState('')
  const cart = useSelector(state => state.cart);
  const [shippingAddress,setShippingAddress]=useState(JSON.parse(localStorage.getItem("shippingAddress")) || '')
  const [name,setName]=useState("")

  useLocalStorageSync("cart", cart);
  useLocalStorageSync("shippingAddress", shippingAddress);
  useLocalStorageSync("formData", formData);

  return (
    <div className="app">
      {modalOpen && <Modal setModalOpen={setModalOpen}>
        
        {modalType==="shipping" && <ShippingForm setShippingAddress={setShippingAddress} formData={formData} setFormData={setFormData} setModalOpen={setModalOpen}/>}

        {modalType==="login" && <Login setName={setName} setModalOpen={setModalOpen}/>} 
        
      </Modal>}

      <Navbar name={name} input={input} setInput={setInput} setModalOpen={setModalOpen} setModalType={setModalType}/>
      <div className="middle" >

      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop input={input}/>} />
          <Route path="/Cart" element={<Cart cart={cart} setModalOpen={setModalOpen} shippingAddress={shippingAddress} setModalType={setModalType}/>} />
          <Route path="/wishList" element={<WishList/>}/>
          <Route path="/checkout" element={<Checkout formData={formData} shippingAddress={shippingAddress} setModalOpen={setModalOpen} setModalType={setModalType} cart={cart}/>} />
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
