import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="bg-purple-700 text-white p-5 rounded-full">
        Hello Testing Tailwind
      </h1> */}
      
      <Card userName="Rahul" />
      <br />
      <Card />

      
    </>
  );
}

export default App
