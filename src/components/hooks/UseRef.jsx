import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [name, setName] = useState("Ashish");
    const refEle = useRef("");

    const Reset = () => {
        setName("");
        refEle.current.focus();
    }

    const handleInput = () => {
        refEle.current.style.color = "blue";
    }

  return (
    <div>
        <h2>useRef Hook</h2>
        <input ref={refEle} onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Your name' />
        <button onClick={Reset} >Reset</button>
        <button onClick={handleInput} >Handle Input</button>
    </div>
  )
}

export default UseRef