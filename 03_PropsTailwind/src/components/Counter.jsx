import { useState } from "react";

function Counter(){

   const [counter, setCounter] = useState(0);
   
   function increase(){
        setCounter(counter+1);
        setCounter(counter+1); // no effect on ui
        setCounter(counter+1); // no effect on ui
        setCounter(counter+1); // no effect on ui
    }
    function decrease(){
        setCounter(prevCounter => prevCounter-1);        
        // setCounter(prevCounter => prevCounter-1); // effects the results        
        // setCounter(prevCounter => prevCounter-1); // effects the results        
    }


   return(
    <>
    <h1 className="text-cyan-400 mb-9">{counter}</h1>
    <button onClick={increase} className="bg-green-600 hover:bg-green-900 mr-6">Increase</button><button onClick={decrease} className="bg-red-600 hover:bg-red-900">Decrease</button>
    </>
   );

}

export default Counter;