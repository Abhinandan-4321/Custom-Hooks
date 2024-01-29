import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStorage from './Component/UseStorage'

function App() {
  const [state, setState] = UseStorage(" ")

  return (
    <div>
      <input type="text" onChange={(e)=> setState(e.target.value)} value={state} />
    </div>
  )
}

export default App
