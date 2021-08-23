import React from "react";

const Counter = ({ onIncrease, onDecrease, number }) => {//어디서 프롭을 해오나?
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button> 
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
