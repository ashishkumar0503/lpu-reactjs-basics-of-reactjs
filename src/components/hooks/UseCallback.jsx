import React, { useCallback, useState } from 'react'
import ChildA from './ChildA';

const UseCallback = () => {

    const [add, setAdd] = useState(0);

    // const learning = () => {
    // }

    const learning = useCallback(() => {
        return add*10;
    }, [add]);

  return (
    <div>
        <h2>useCallback Hook</h2>
        <ChildA Learning={learning}/>
        <h3>{add}</h3>
        <button onClick={() => setAdd(add+1)}>Addition</button>
    </div>
  )
}

export default UseCallback