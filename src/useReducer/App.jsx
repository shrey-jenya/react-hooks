import React, { useReducer } from 'react'
const App = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count+1 }
            case 'DECREMEMT':
                return { count: state.count> 0 ? state.count-1 : 0 }
                default :
                return  state
        }
    }
    const initialState = {count:0}
    const [state,dispatch]= useReducer(reducer,initialState)
    return (
        <div>
            <p>count {state.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
            <button onClick={()=>dispatch({type:'DECREMEMT'})}>DECREMENT</button>
        </div>
    )
}
export default App
