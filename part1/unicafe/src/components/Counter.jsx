import react, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseByone = () => {
    setCounter(counter + 1);
  };
  const decreaseByone = () => {
    setCounter(counter - 1);
  };
  const setToZero = () => {
    setCounter(0);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <Button handleClick={increaseByone}>+</Button>
      <Button handleClick={decreaseByone}>-</Button>
      <Button handleClick={setToZero}>reset</Button>
    </div>
  );
};

export default Counter;
