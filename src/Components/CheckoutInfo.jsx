import { useState } from "react"
import { Accordian } from "./Accordian"

export const CheckoutInfo = ({formData,setModalOpen}) => {
  const [active,setActive]=useState(2)
  return (
    <>
      <span onClick={()=>setModalOpen(true)} style={{color:'blue',cursor:"pointer"}}>Change Shipping/Billing Info</span>
      <Accordian active={active} index={0} setActive={setActive}>
        <h3>Billing Information</h3>
        {active==0 && Object.values(formData).slice(0,4).map(item=>
          <p><b>{item.label}</b>: {item.value}</p>
        )}
      </Accordian>

      <Accordian active={active} index={1} setActive={setActive}>
        <h3>Shipping Information</h3>
        {active==1 && Object.values(formData).slice(4,).map(item=>
          <p><b>{item.label}</b>: {item.value}</p>
        )}
      </Accordian>
        
      <Accordian active={active} index={2} setActive={setActive}>
        <h3>Payment Option</h3>
        {active==2 && <>
          <label htmlFor="upi">UPI</label>
          <input style={{ marginLeft:'.2rem'}} id="upi" type="radio" name="payment" required/>
          <label htmlFor="cod"> COD</label>
          <input style={{ marginLeft:'.2rem'}} id="cod" type="radio" name="payment" required/>
        </>}
        
      </Accordian>
    </>
  )
}
 
