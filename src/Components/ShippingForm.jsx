import {useRef, useState } from "react"
import { checkShippingFormData } from "../utils/Checker"
import { useContext } from "react"
import { ModalContext } from "../Context/ModalContext"
import styles from "./ShippingForm.module.css"


export const ShippingForm = ({setShippingFormData,shippingFormData}) => {
  const [formData,setFormData]=useState(shippingFormData)
  const formRef=useRef()
  const {setModalOpen}=useContext(ModalContext)

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:{...formData[e.target.id],value:e.target.value}})
  }

  const handleSubmit=(e)=>{
    e.preventDefault() 
    if(!checkShippingFormData(formData,setFormData)) return  
    const data=Object.fromEntries(Object.values(formData).map(item=>[item.label,item.value]))
    console.log(data)
    setShippingFormData(formData)
    setModalOpen(false) 
  } 

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      {Object.values(formData).map(item => {
        if (item.inputType === 'input') {
          return (
            <div key={item.id} className={styles.fieldGroup}>
              <label htmlFor={item.id}>{item.label}: </label>
              <div>
                <input
                  value={item.value}
                  onChange={handleChange}
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  required
                />
                <br />
                {item.error && <small className={styles.error}>{item.error}</small>}
              </div>
            </div>
          );
        } else if (item.inputType === 'select') {
          return (
            <div key={item.id} className={styles.fieldGroup}>
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

      <button className={`stheme ${styles.button}`}>
        OK
      </button>
    </form>

  )
}
