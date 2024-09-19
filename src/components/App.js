import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState(``);
  const [markDown, setMarkDown] = useState([]);

  useEffect(() => {
    const addToMarkDown = () => {
      setMarkDown([...markDown, text]);
    };
    addToMarkDown();
  }, [text]);
  return (
    <div
      className="app"
      style={{
        display: "grid",
        height: "100vh",
        width: "100%",
        gridTemplateColumns: "1fr 1fr",
        backgroundColor: "#AAAAAA",
      }}
    >
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ padding: "1rem", backgroundColor: "#CCCCCC" }}
        className="textarea"
      ></textarea>
      <div style={{ padding: "1rem" }} className="preview">
        <textarea
          readOnly
          value={text}
          className="loading"
          style={{
            fontWeight: "bold",
            height: "100%",
            width: "100%",
            resize: "none",
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
