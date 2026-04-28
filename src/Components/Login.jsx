import { useContext, useRef, useState } from "react"
import styles from "./Login.module.css"
import { checkPassword } from "../utils/checker"
import { toast } from "react-toastify"
import { ModalContext } from "../Context/ModalContext"

export const Login = ({setName}) => {
  const [login,setLogin]=useState("Sign Up")
  const formRef=useRef()
  const nameRef=useRef()
  const passwordRef=useRef()
  const [passwordError,setPasswordError]=useState("")
  const {setModalOpen}=useContext(ModalContext)

  const handleSubmit=(e)=>{
    e.preventDefault();
    let {valid,error}=checkPassword(passwordRef.current.value)
    if(!valid){
      setPasswordError(error)
      return
    }
    toast.success("login succesful")
    setModalOpen(false)
    setName(nameRef.current.value.split(" ")[0])
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form} action="" style={{ padding: '1rem' }}>

      <h2>{login}</h2>  

      {login === "Sign Up" && (
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
        {passwordError && <small style={{color:'var(--accent-color)'}}>{passwordError}</small>}
      </div>
      

      <button className="stheme">{login}</button>

      <p>{login==="Sign Up"?"Already have an account?":"Don't have an account?"} <span onClick={()=>setLogin(login === "Sign Up" ? "Login" : "Sign Up")} style={{color:"var(--accent-color)",cursor:"pointer"}}>{login==="Sign Up"?"Login":"Sing Up"}</span></p>
     


    </form>
  )
}
