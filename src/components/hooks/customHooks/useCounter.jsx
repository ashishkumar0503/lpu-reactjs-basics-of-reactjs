import { useState } from 'react'

const useCounter = () => {

    const [counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter(counter+1);
    }
    const Decrement = () => {
        setCounter(counter-1);
    }

  return [counter, Increment, Decrement];
}

export default useCounter