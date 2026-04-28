import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="counter-card">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="decrement" onClick={decrement}>
          − Minus
        </button>
        <button className="increment" onClick={increment}>
          + Plus
        </button>
      </div>
    </div>
  )
}

export default App