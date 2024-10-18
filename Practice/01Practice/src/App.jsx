import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'

function App() {

 return (
 <>
 <Greeting name="Rahul" age="22" />
 <Greeting name="Deva" age="21" />
 </>
 
 )
}

export default App
