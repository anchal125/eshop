import { Route, Routes} from 'react-router-dom'
import { useLocalStorageSync } from './hooks/UseLocalStorageSync'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop'
import { useState } from 'react';
import { Cart } from './Pages/Cart'
import { useSelector } from 'react-redux'
import { useModal } from './hooks/useModal'
import { Modal } from './Components/Modal'
import { Checkout } from './Pages/Checkout'
import { ShippingForm } from './Components/ShippingForm'
import { OrderSummary } from './Pages/OrderSummary'
import { About } from './Pages/About'
import { Login } from './Components/Login'

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

        <Routes>
          <Route exact path="/eshop" element={<Home />} />
          <Route path="/Shop" element={<Shop input={input}/>} />
          <Route path="/Cart" element={<Cart cart={cart} setModalOpen={setModalOpen} shippingAddress={shippingAddress} setModalType={setModalType}/>} />
          <Route path="/checkout" element={<Checkout formData={formData} shippingAddress={shippingAddress} setModalOpen={setModalOpen} cart={cart}/>} />
          <Route path="/Order" element={<OrderSummary shippingAddress={shippingAddress} cart={cart}/>}/>
          <Route path="/About" element={<About />}/>
          {/*  />
          
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Country/:name" element={<CountryPg />} />
          <Route path="*" element={<Error />} /> */}
        </Routes>

      </div>
      <Footer/>

    </div>
  )
}

export default App
