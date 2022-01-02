import React from "react";

export default function Scoreboard(props) {
  const style = {
    margin: "auto",
    width: "100%",
    border: "3px solid black",
    "font-size": "xx-large",
    "font-family": "Georgia, serif",
    "text-align": "center",
  };

  const timer = {
    float: "center",
  };

  const score = {
    float: "left",
  };

  const highscore = {
    float: "right",
  };

  return (
    <div style={style}>
      <div style={timer}>Time : {props.seconds}</div>
      <div style={score}>Score : {props.score}</div>
      <div style={highscore}>Hi-Score : {props.highscore}</div>
    </div>
  );
}
