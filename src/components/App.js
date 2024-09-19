import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  // const [markDown, setMarkDown] = useState([]);

  // useEffect(() => {
  //   const addToMarkDown = () => {
  //     setMarkDown([...markDown, text]);
  //   };
  //   addToMarkDown();
  // }, [text]);
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
          setLines(text.split("\n"));
          // console.log(text, lines);
        }}
        value={text}
        style={{ padding: "1rem", backgroundColor: "#CCCCCC" }}
        className="textarea"
      ></textarea>
      <div style={{ padding: "1rem" }} className="preview">
        {lines.map((e, i) => {
          if (e[0] == "#") {
            e = e.slice(1);
            return (
              <h1 key={i} className="loading">
                &nbsp;&nbsp;&nbsp;{e}
              </h1>
            );
          }
          return (
            <div key={i} className="loading">
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
