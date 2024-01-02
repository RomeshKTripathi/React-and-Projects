import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 15;
  const addValue = () => {
    if(typeof(counter) === 'string'){
      setCounter(1);
    }else{
      setCounter(counter + 1);
    }
    // counter += " Tripathi" 
  };
  const removeValue = ()=>{
    // counter = counter.split(' ')[0];
    if(counter == 0 || typeof(counter) === 'string'){
      setCounter("Can not decrease value : 0");
    }
    else{
      setCounter(counter-1);
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value 👀: {counter}</h2>
      
      <button
      onClick={addValue}
      >Add Value</button><br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
