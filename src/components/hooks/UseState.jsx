import React, { useState } from 'react'

const UseState = () => {
    // var i = 0;
    // const fruits = ["Apple", "Mango", "Litchi"];
    // const [fruit, setFruit] = useState("");
    // const changeFruit = () => {
    //     setFruit(`${fruits[i]}`);
    //     i++;
    //     if(i === fruits.length){
    //       setFruit(`${fruits[0]}`);
    //     }
        
    // }

    const [name, setName] = useState("Apple");
    const [count, setCount] = useState(0);
    const changeName = () => {
        if(name === "Apple"){
          setName("Apple is Good!");
          setCount(prevCount => prevCount+1);
        } else {
          setName("Apple");
          setCount(prevCount => prevCount+1);
        }
    }


  return (
    <div>
        <h2>useState Hook</h2>
        <h3>How are you, {name} and the count is: {count} </h3>
        <button onClick={changeName}>Click me to change</button>
        {/* <p>{fruit}</p>
        <button onClick={changeFruit}>Display fruit</button> */}
    </div>
  )
}

export default UseState