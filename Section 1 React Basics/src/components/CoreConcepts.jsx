import React from "react";

const CoreConcepts = (props) => {
  return (
    <div>
      {/* Display the title prop inside the h1 element */}
      <h1>{props.title}</h1>

      {/* Display the description prop inside the p element */}
      <p>{props.description}</p>

      {/* Set the image source to the img prop */}
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default CoreConcepts;
