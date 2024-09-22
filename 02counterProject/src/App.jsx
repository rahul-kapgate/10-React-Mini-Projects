import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(19);
  
  // let counter = 0;

  function addValue(){
    counter = counter + 1;

    if (counter > 20) {
      counter = 20;
      alert("Can't Add vlaue ")
    }else{
    setCounter(counter)
    }
    
  }

  function removeValue() {
    counter = counter - 1;

    if (counter < 0) {
      counter = 0;
      alert("Can't Remove Value ")
    }else{
    setCounter(counter);
    }

    
    
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>counter value : {counter}</h3>

      <button onClick={addValue}>add value</button>

      <br />

      <button onClick={removeValue}>remove value </button>
    </>
  );
}

export default App
