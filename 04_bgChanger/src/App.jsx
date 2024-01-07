import { useState } from "react";

function App(){
  const colorClasses = {
    Red:"bg-red-500",
    Blue:"bg-blue-500",
    Orange:"bg-orange-500",
    Gray:"bg-gray-500",
    Cyan:"bg-cyan-500",
    Purple:"bg-purple-500",
    Yellow:"bg-yellow-500",
    Lime:"bg-lime-500",
    Emerald:"bg-emerald-700", 
    Fuchsia:"bg-fuchsia-800", 
    Teal:"bg-teal-800", 
    Sky:"bg-sky-800", 

}
  // extracting the keys from the objects.
  const colors = Object.keys(colorClasses);
  // Using state to update background color class in div-container.
  const [color, setColor] = useState("olive");

  return <div className={`w-full bg- h-screen duration-200 ${color}`} >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      
      <div className="text-white flex flex-wrap justify-center gap-2 shadow-xl bg-white px-2 py-2 rounded-full">
          {
            colors.map((color)=>(<button onClick={()=>setColor(colorClasses[color])} 
        className={`outline-none rounded-full px-4 py-1 ${colorClasses[color]}`} >{color}</button>)
            )
          }
      </div>

    </div>
  </div>
}

export default App;