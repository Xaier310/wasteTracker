import React from "react";

function Card(props) { 
  console.log("its props : ",props)
  const myStyle={
    color:"white"
  }

  return (
    <div className="note" id="mainDiv">
      <h1>{props.username}</h1>
      <p style={myStyle}>{props.email}</p>
    </div>
  );
}

export default Card;

