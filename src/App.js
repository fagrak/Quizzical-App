import React from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz.js";
import "./styles.css";

export default function App() {
  const [isStart, setStart] = React.useState(false);

  function start() {
    setStart(true);
  }

  return (
    <main>
      {!isStart && <Start start={start} />}
      {isStart && <Quiz />}
      <img className="blob1" src={require("/src/images/blob.png")} alt="" />
      <img className="blob2" src={require("/src/images/blob2.png")} alt="" />
    </main>
  );
}
