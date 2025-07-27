import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
  <div className="flex flex-col items-center gap-6">
    <h1 className="text-3xl font-bold text-white">Counter App</h1>

    <p className={`text-xl ${count < 0 ? 'text-red-500' : 'text-white'}`}>
      Current Counter: {count}
    </p>

    <div className="flex gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-yellow-200 px-4 py-2 rounded hover:bg-yellow-300"
      >
        Reset
      </button>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  </div>
</div>

  )
}

export default App
