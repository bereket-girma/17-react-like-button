import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let [likes, setLike] = useState("Like");
  function myCount() {
    setCount(count + 1);
    setLike(likes);

    if (count === 0) {
      setLike("Like");
    } else if (count === 1) {
      setLike("Likes");
    }
    console.log(likes);
  }

  return (
    <div className="App">
      <button onClick={myCount} className="myButton">
        {count} {likes}
      </button>
    </div>
  );
}

export default App;
