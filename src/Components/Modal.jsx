import styles from "./Modal.module.css"

export const Modal = ({children,setModalOpen}) => {

  return (
    <div className={styles.overlay}>
      <span onClick={()=>setModalOpen(false)} className={styles.closeModal}>X</span>
      {children}
    </div>
  )
} 

