import React from "react";

export default function Score(props) {
  const style = {
    margin: "auto",
    width: "50%",
    border: "3px solid black",
    padding: "10px",
    "font-size": "xx-large",
    "font-family": "Georgia, serif",
    "text-align": "center",
  };
  return <div style={style}>Score : {props.score}</div>;
}
