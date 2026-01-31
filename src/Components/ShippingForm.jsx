import {useRef } from "react"
import { UseOutsideClick } from "../hooks/UseOutsideClick"
import { checkFormData } from "../utils/Checker"

export const ShippingForm = ({setShippingAddress,formData,setModalOpen,setFormData}) => {
  const formRef=useRef()

  UseOutsideClick(formRef,()=>setModalOpen(false))

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:{...formData[e.target.id],value:e.target.value}})
  }

  const handleSubmit=(e)=>{
    e.preventDefault() 
    if(!checkFormData(formData,setFormData)) return  
    const data=Object.fromEntries(Object.values(formData).map(item=>[item.label,item.value]))
    console.log(data)
    setShippingAddress(formData.Address.value+", "+formData.City.value+", "+formData.State.value+", "+formData.Country.value)
    setModalOpen(false) 
  } 

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ padding: '1rem', background: 'white' }}>
      {Object.values(formData).map(item => {
        if (item.inputType === 'input') {
          return (
            <div key={item.id} style={{marginBottom:".5rem"}}>
              <label htmlFor={item.id}>{item.label}: </label>
              <input
                value={item.value}
                onChange={handleChange}
                id={item.id}
                type={item.type}
                placeholder={item.placeholder}
                required
              />
              <br />
              {item.error && <small style={{color:"red"}}>{item.error}</small>}
            </div>
          );
        } else if (item.inputType === 'select') {
          return (
            <div key={item.id} style={{marginBottom:".5rem"}}>
              <label htmlFor={item.id}>{item.label}: </label>
              <select
                value={item.value}
                onChange={handleChange}
                name={item.label}
                id={item.id}
                required
              >
                <option disabled>{item.label}</option>
                {item.options.map(option => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          );
        }

      
      })}

      <button style={{ padding: '.3rem' }} className="stheme">
        OK
      </button>
    </form>

  )
}
