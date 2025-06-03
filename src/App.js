import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <h2> {name ? `Hello, ${name}` : "Please insert your name"}</h2>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={changeName}
      />
    </div>
  );
}
