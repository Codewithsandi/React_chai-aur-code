import { useState } from "react";
import "./style.css";

function App() {
  const [counter, setCounter] = useState(10)
  const [disabledBTN, setDisabledBTN] = useState(false)

  const addNumber = () => {
    if (counter === 19) {
      setDisabledBTN(true)
    }
    if (counter < 20) {
      setCounter(counter + 1)

      //! for interview purpose 
      //? if we use 
      //? setCounter(counter + 1)
      //? setCounter(counter + 1)
      //? setCounter(counter + 1)

      //* it cant increment all of this because 
      //* all of this setCounter update a same counter value so useState generate a batch and check.
      //* here we only upadte same counter value so it cant execute all setCounter function. 

      //* if we want to increase all of thease then do this
      //? setCounter((prevCounter) => prevCounter + 1)
      //? setCounter((prevCounter) => prevCounter + 1)
      //? setCounter((prevCounter) => prevCounter + 1)
      
      setDisabledBTN(false)
    }
  }
  const deleteNumber = () => {
    if (counter === 1) {
      setDisabledBTN(true)
    }
    if (counter > 0) {
      setCounter(counter - 1)
      setDisabledBTN(false)
    }
  }
  return (
    <>
      <h1>Chai aur Code | Sandipan </h1>
      <h2>Counter Value = {counter}</h2>
      <button onClick={addNumber} disabled={disabledBTN}>Increase</button>
      <button onClick={deleteNumber}>Decrease</button>
      <h2>Counter = {counter} </h2>
    </>
  )
}

export default App
