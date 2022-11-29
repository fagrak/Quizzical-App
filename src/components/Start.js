import React from "react";

export default function Start(props) {
  return (
    <div className="start">
      <h1 className="title">Quizzical</h1>
      <h3 className="subTitle">Test Yourself</h3>
      <button className="start-button" onClick={props.start}>
        Start quiz
      </button>
    </div>
  );
}
