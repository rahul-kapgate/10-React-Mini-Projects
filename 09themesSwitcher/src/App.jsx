
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
import { ThemeContextProvider } from './contexts/Theme';

function App() {

  const [themeMode,setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode("dark");
  };
  
  //change in html element 
  useEffect( () => {

    let htmlVar = document.querySelector('html')

    htmlVar.classList.remove("light","dark")

    htmlVar.classList.add(themeMode)

  } , [themeMode])

  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App
