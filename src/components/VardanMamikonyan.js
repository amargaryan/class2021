import React from "react";
import Watch from "./Watch";

export default function MarduImage({source}) {
  return (
    <div>
      <Title name='Vardan Mamikonyan'/>
      <img src={source}></img>
    </div>
  );
}

export function Title(props) {
  return <div>{props.name} <Watch /></div>;
}

 