import React, { useState } from "react";

export const Accordian = ({
  defaultActive = null,
  multiple = false,
  children,
}) => {
  const [active, setActive] = useState(defaultActive);
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          active,
          setActive,
          index,
          multiple,
        }),
      )}
    </div>
  );
};
