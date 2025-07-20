import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Accordian.module.css"

export const Accordian = ({active,setActive,children,index}) => {
  return (
    <div className={styles.accordian}>

      {active!==index?<IoIosArrowDown onClick={()=>setActive(index)} style={{float:"right",cursor:"pointer"}}/>:
      <IoIosArrowUp onClick={()=>setActive()} style={{float:"right",cursor:"pointer"}}/>}
      {children}
      
    </div>
  )
}
