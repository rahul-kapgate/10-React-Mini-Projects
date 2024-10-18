import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter: {counter}</h1>

      {/* Add button will only increment if counter is less than 20 */}
      <button onClick={() => counter < 20 && setCounter(counter + 1)}>
        Add
      </button>
      <br />

      {/* Remove button will only decrement if counter is greater than 0 */}
      <button onClick={() => counter > 0 && setCounter(counter - 1)}>
        Remove
      </button>
    </>
  );
}

export default Counter;
