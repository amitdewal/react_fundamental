import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)


  const IncrementCount = () => {
    setCount(count + step)
  }

  const DecrementCount = () => {
    setCount(count - step)
  }

  const IncrementTwice =()=>{
    // setCount(count + 1)
    // setCount(count + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }
  
  return (
    <div className='app-container'>
      <h1>Counter Value: {count}</h1>
      <input
      type='number'
      value={step}
      onChange={(e) => setStep(parseInt(e.target.value))}
      />
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
      <button onClick={IncrementTwice}>+2</button>
    </div>
  )
}

export default App
