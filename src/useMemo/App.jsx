import React, { useMemo, useState } from 'react'

const App = () => {
    const [count , setCount] = useState(0)
    const doubleCount= useMemo(()=>{
        return count*2
    },[count])
  return (
    <div>
       <h1>{doubleCount}</h1>
       <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App
