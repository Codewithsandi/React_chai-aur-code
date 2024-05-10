import { useState } from "react";
import "./style.css";

function App() {
  const [counter, setCounter] = useState(16)
  const [disabledBTN, setDisabledBTN] = useState(false)

  const addNumber = () => {
    if (counter === 19) {
      setDisabledBTN(true)
    }
    if (counter < 20) {
      setCounter(counter + 1)
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
