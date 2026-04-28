import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const AccordianItem = ({
  active = null,
  setActive,
  children,
  index = 0,
  multiple,
  className=""
}) => {
  const [expand, setExpand] = useState(false);

  const isOpen = multiple ? expand : active === index;

  const handleClick = () => {
    if (multiple) {
      setExpand((prev) => !prev);
    } else {
      setActive(isOpen ? null : index);
    }
  };

  return (
    <div className={className}>
      <div onClick={handleClick}>
        {isOpen ? (
          <IoIosArrowUp
            style={{ float: "right", cursor: "pointer" }}
          />
        ) : (
          <IoIosArrowDown
            style={{ float: "right", cursor: "pointer" }}
          />
        )}
      </div>

      {children[0]}
      {isOpen && children[1]}
    </div>
  );
};