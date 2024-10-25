import React from "react";

// const TabButton = (props) => {
// const handleClick = () => {
//   console.log("Clicked");
// };
const TabButton = ({ children, onSelect }) => {
  return (
    <div>
      <li>
        {/* Use the onSelect prop that is passed from the parent App component */}
        <button onClick={onSelect}>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;
