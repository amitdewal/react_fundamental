import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [anotherValue, setAnotherValue] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
    console.log("use effect triggerd")
  }, [count, anotherValue])

  const incrementCount = () => {
    setCount(count + 1)

  };

  const incrementAnotherValue = () => {
    setAnotherValue(anotherValue + 1)
  }

  return (
    <div>
      <h1>Use Effect Hook</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementAnotherValue}>Increment</button>
    </div>
  )
}

export default App
