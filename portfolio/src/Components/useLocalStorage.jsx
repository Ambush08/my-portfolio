import {useState, useEffect} from 'react';


const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(()=>{

    let curretntValue;

    try{
        curretntValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
    } catch(error) {
        console.log(error);
        curretntValue = defaultValue;
    }

    return curretntValue;
  });

  useEffect(()=>{

    localStorage.setItem(key, JSON.stringify(value))
  },[value, key])

  return [value, setValue];
}

export default useLocalStorage