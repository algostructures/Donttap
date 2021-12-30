import React from "react";

export default function Scoreboard(props) {
  const style = {
    margin: "auto",
    width: "50%",
    border: "3px solid black",
    padding: "10px",
    "font-size": "xx-large",
    "font-family": "Georgia, serif",
    "text-align": "center",
  };
  return (
    <div style={style}>
      <div>{props.seconds}</div>
      <div>{props.score}</div>
      <div>HI-Score : {props.highscore}</div>
    </div>
  );
}
