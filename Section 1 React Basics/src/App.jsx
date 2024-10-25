import { useState } from "react";
import "./App.css";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { Data } from "./data"; // Named import

import { EXAMPLES } from "../data";

function App() {
  const [selectedTopic, setselectedTopic] = useState("");

  // Function to handle button clicks
  const handleClick = (topic) => {
    setselectedTopic(topic);
  };

  // Inline styles for different elements
  const containerStyle = {
    margin: "20px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "30px",
  };

  const buttonStyle = (isActive) => ({
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: isActive ? "#0056b3" : "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  });

  const exampleStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "26px",
    color: "#333",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "20px",
  };

  const codeStyle = {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "5px",
    fontFamily: "monospace",
    color: "#e83e8c",
  };

  return (
    <div style={containerStyle}>
      {/* Rendering CoreConcepts components */}
      {Data.map((item, index) => (
        <CoreConcepts
          key={index}
          // title={item.title}
          // img={item.image}
          // description={item.description}
          {...item}
        />
      ))}

      {/* Rendering TabButton components with onSelect handlers */}
      <div style={buttonContainerStyle}>
        <TabButton
          onSelect={() => handleClick("components")}
          style={buttonStyle(selectedTopic === "components")}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => handleClick("jsx")}
          style={buttonStyle(selectedTopic === "jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          onSelect={() => handleClick("props")}
          style={buttonStyle(selectedTopic === "props")}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => handleClick("state")}
          style={buttonStyle(selectedTopic === "state")}
        >
          State
        </TabButton>
      </div>

      {/* Display selected topic details */}
      <div style={exampleStyle}>
        {!selectedTopic ? (
          <p>Please Select a topic</p>
        ) : (
          <>
            <h3 style={headingStyle}>{EXAMPLES[selectedTopic].title}</h3>
            <p style={descriptionStyle}>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre style={codeStyle}>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
