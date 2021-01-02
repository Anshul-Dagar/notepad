import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");

  }

  return (
      <div className="container">
        <div className="heading">
          <h1>Notepad</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleChange} value={inputText} />
          <button onClick={handleClick}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
  
  );
}

export default App;
