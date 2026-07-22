import {useEffect} from 'react';
import useLocalStorage from './Components/useLocalStorage';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';


const App = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'dark');


  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
  },[theme])

  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Home />
    </>
  )
}

export default App