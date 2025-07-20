import { useState } from "react"

export const useModal = () => {
  const [modalType,setModalType]=useState("")
  const [modalOpen,setModalOpen]=useState(false)
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("formData")) || {
    email: {
      id: "email",
      label: "Email Address",
      type: "email",
      inputType: "input",
      placeholder: "Enter your email",
      value: ""
    },
    firstName: {
      id: "firstName",
      label: "First Name",
      type: "text",
      inputType: "input",
      placeholder: "First Name",
      value: ""
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      required: true,
      type: "text",
      inputType: "input",
      placeholder: "Last Name",
      value: ""
    },
    Mobile: {
      id: "Mobile",
      label: "Mobile Phone",
      type: "tel",
      inputType: "input",
      placeholder: "Mobile Number",
      value: ""
    },
    Address: {
      id: "Address",
      label: "Address",
      type: "text",
      inputType: "input",
      placeholder: "Enter Address",
      value: ""
    },
    Country: {
      id: "Country",
      label: "Country",
      type: "text",
      inputType: "select",
      value: "India",
      options:['India']
    },
    ZipCode: {
      id: "ZipCode",
      label: "Zip Code",
      type: "text",
      inputType: "input",
      placeholder: "ZIP Code",
      value: ""
    },
    City: {
      id: "City",
      label: "City",
      type: "text",
      inputType: "input",
      placeholder: "City",
      value: ""
    },
    State: {
      id: "State",
      label: "State",
      type: "text",
      inputType: "select",
      options:["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Haryana", "Punjab"],
      value: "Maharashtra" 
    },
    
  });
  
  
  return {modalOpen,setModalOpen,formData,setFormData,modalType,setModalType}
}
