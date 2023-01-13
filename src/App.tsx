import React, {useState} from 'react';
import './App.css';
import {Increment} from "./Increment";
import {Reset} from "./Reset";
import {Counter} from "./Counter";


function App() {
  const startNumbers = 0;
  const maxNumbers = 5;
const [numbers, setNumbers] = useState(0)

  const addNumbers = () => {
      if (numbers < maxNumbers) {
          setNumbers(numbers + 1)
      }
  }
    const resNumbers = () => {
      if(numbers !== startNumbers) {
          setNumbers(startNumbers)
      }
      }


    const incDisabled = numbers === maxNumbers;
    const resetDisabled = numbers === startNumbers;

  return (
    <>
        <Counter
            numbers = {numbers}
            maxNumbers={maxNumbers}
      />
      <>
    <Increment
        callback={addNumbers}
        incDisabled={incDisabled}
    />
    <Reset
        callback={resNumbers}
        resetDisabled={resetDisabled}/>
    </>
    </>
  );
}

export default App;
