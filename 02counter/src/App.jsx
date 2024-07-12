import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Hooks :
  let [counter, setCounter] = useState(15)  // returns two values, storing in array


  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      counter++
      setCounter(counter)
      console.log("value added", counter);
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      counter--
      setCounter(counter)
      console.log("value added", counter);
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >remove value: {counter}</button>
      <h3>footer : {counter}</h3>
    </>
  )
}

export default App
