import { useState } from "react";

import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  const [inputcount, setInputcount] = useState(0);

  // // “Each setCount adds an instruction to a queue”
  // const incrementHandler = (val) => {
  //   setCount((anything) => {
  //     //When you use {} in an arrow function, you must explicitly return a value.
  //     return anything + 1 + val;
  //   });

  //   setCount(
  //     (anything) => anything + 1, // here we dont need to return.
  //   );

  //   setCount((anything) => {
  //     return anything + 1;
  //   });
  // };
  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card">Count is {count}</div>
      <div>
        <button
          onClick={() => {
            // incrementHandler(2);
            setCount(count + 1);
          }}
          style={{ margin: "0 5px" }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount((count) => Math.max(count - 1, 0));
          }}
          style={{ margin: "0 5px" }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
          style={{ margin: "0 5px" }}
        >
          Reset
        </button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <input
          style={{
            width: "200px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6em 1.2em",
          }}
          type="text"
          value={inputcount}
          onChange={(e) => setInputcount(Number(e.target.value))}
        />
        <button
          onClick={() => {
            setCount(Number(inputcount));
            setInputcount(0);
          }}
          style={{ margin: "0 5px" }}
        >
          Set to {inputcount}
        </button>
      </div>
    </>
  );
}
