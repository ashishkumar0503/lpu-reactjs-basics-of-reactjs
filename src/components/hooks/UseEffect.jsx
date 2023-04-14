import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        //console.log("Hello useEffect Hook 1");
        if(count === 0) {
            document.title = "Chats";
        } else {
            document.title = `Chats (${count})`;
        }
    });
    

  return (
    <div>
        <h2>useEffect Hook</h2>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default UseEffect