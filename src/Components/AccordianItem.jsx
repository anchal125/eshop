import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const AccordianItem = ({
  active = null,
  setActive,
  children,
  index = 0,
  multiple,
  className = "",
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
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Collapse section" : "Expand section"}
      >
        {isOpen ? (
          <IoIosArrowUp aria-hidden="true" />
        ) : (
          <IoIosArrowDown aria-hidden="true" />
        )}
      </button>
      {children[0]}
      {isOpen && children[1]}
    </div>
  );
};

