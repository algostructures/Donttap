import React from "react";

export default function Cell(props) {
  const rectangle = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    border: `1px solid red`,
  };
  const targetrectangle = {
    width: "100px",
    height: "100px",
    backgroundColor: "black",
    border: `1px solid black`,
  };
  return <div style={props.isTarget ? rectangle : targetrectangle}></div>;
}
