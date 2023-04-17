import React, { createContext } from 'react'
import ChildC from './ChildC';

const data1 = createContext();
const data2 = createContext();  

const UseContext = () => {

    const name = "Ashish Kumar";
    const gender = "Male";

  return (
    <>
        <h2>useContext Hook</h2>
         <data1.Provider value={name} >
            <data2.Provider value={gender} >
                <ChildC/>
            </data2.Provider>
         </data1.Provider>
    </>
  )
}

export default UseContext
export { data1, data2 };