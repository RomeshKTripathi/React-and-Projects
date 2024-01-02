import './App.css'
import Card from './components/Card'



function App(){
  return (
    <>
      <button className='bg-purple-600 border-none hover:bg-green-600 mb-6'>Button</button>
      {/* Original Syntax is */}
      <Card username="Romesh Tripathi" btnText="Know More" description="Romesh Tripathi is a Software Engineer and a well Known Teacher"/>
      

    </>
  )
}

export default App
