import React, { useCallback, useState } from 'react'
import Count from './Count';

const App = () => {
    const [count,setCount]=useState(0)
    const handleClick=useCallback(()=>{
        console.log('clicked...');
    },[])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment {count} </button>
      <Count handleClick={handleClick}/>
    </div>
  )
}

export default App
