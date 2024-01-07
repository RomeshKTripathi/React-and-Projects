import { useEffect } from "react";
import { useCallback } from "react";
import { useState, useRef } from "react";

function App(){
  // Store the demanded length(from range input)
  const [length, setLength] = useState(8);
  // store the state if user allowed to include numbers.
  const [numberAllowed, setNumberAllowed] = useState(false);
  // Store if user allowed to include characters.
  const [charAllowed, setCharAllowed] = useState(false);
  // store generated password.
  const [password, setPassword] = useState("");

  // use useCallback hook used to perform optimization to over the function which are frequently called, by keeping them(functions) in the Cache. 
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "EFGKvwjklaPQCLMNOoxyrsdefgDJmnbcthiABWXYzRSTUpqIVHuZ";
    if(numberAllowed){
      str += "1234567890";
    }
    if(charAllowed){
      str += "!@#$^&*?/";
    }
    for(let i = 0; i < length; i++){
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  // useEffect Hook is used to perform some task whenever the passed paramenters effected/modified.
  useEffect(()=>{
    // this is a Optimum function call using useCallback() 
    // we also can put all the code here but it will not be optimized.
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  const optimizedCopy = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])
  
  const copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
  }
  const passwordRef = useRef(null);



  return <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-purple-300 bg-gray-800">
    <h1 className="mb-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" 
      value = {password}
      className="outline-none w-full py-1 px-3 text-gray-900"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      /> <button onClick={optimizedCopy} className="px-3 py-2 bg-green-400 hover:bg-green-800 text-white">Copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <input type="range" 
      min={8}
      max={100}
      value={length}
      className="cursor-pointer"
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label >Length {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked = {numberAllowed}
      id="numberInput"
      onChange={()=>{
        setNumberAllowed((prev)=>!prev);
      }}
      />
      <label >Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked = {charAllowed}
      id="charInput"
      onChange={()=>{
        setCharAllowed((prev)=>!prev);
      }}
      />
      <label >Special Characters</label>
    </div>
  </div>
}

export default App;