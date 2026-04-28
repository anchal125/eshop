import { createContext, useState } from "react";

export const ModalContext=createContext()

export const ModalContextProvider=({children})=>{
  const [modalOpen,setModalOpen]=useState(null)
  const contextValue={
    modalOpen,
    setModalOpen
  }
  return <ModalContext.Provider value={contextValue}>
    {children}
  </ModalContext.Provider>
}