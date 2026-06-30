import React from 'react'
import { useState } from 'react'

export default function Pr() {
    const [count, setCount] = useState(0)

  return (
    <div className='container'>
        <h1>Counter App</h1>
        <h2>Count={count}</h2>

        <div className='btns'>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count -1)}disabled={count===0}>decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  )
}
