import React, { useContext } from 'react'
import { data1, data2 } from "../hooks/UseContext.jsx";

const ChildC = () => {

    const name = useContext(data1);
    const gender = useContext(data2);

  return (
    <div>
        <h1>
            {" "}
            My name is { name } and gender is { gender }
        </h1>
    </div>
  )
}

export default ChildC