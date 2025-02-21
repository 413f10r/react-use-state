import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/header'
import Button from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <Button />

    </>

  )
}

export default App
