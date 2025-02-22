import { useState } from 'react'
import './App.css'
import languages from './data/languages'
import Header from './components/header'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Header />
      < Main languages = {languages}/>
     


    </>

  )
}

export default App
