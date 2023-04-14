import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state+1;
        case "Decrement":
            return state-1;
        default:
            return state;
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h2>useReducer Hook</h2>
        <h3>{count}</h3>
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

export default UseReducer