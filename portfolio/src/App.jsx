import {useEffect} from 'react';
import useLocalStorage from './Components/useLocalStorage';
import Navbar from "./Components/Navbar";


const App = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'light');


  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
  },[theme])

  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App