// import { useEffect, useState } from 'react';
// import img1 from "./images/i1.jpg";
// import img2 from "./images/i2.jpg";
// import "./App.css";
// import Greeting from './components/greeting/Greeting';
// import {add, sub, mul, div} from './components/calculator/Calculator';
// import UseState from './components/hooks/UseState';
// import UseEffect from './components/hooks/UseEffect';
// import UseMemo from './components/hooks/UseMemo';
// import UseCallback from './components/hooks/UseCallback';
// import UseReducer from './components/hooks/UseReducer';
// import useCounter from './components/hooks/customHooks/useCounter';
// import UseRef from './components/hooks/UseRef';

import AxiosMethod from "./components/httpMethod/AxiosMethod"
import Fetch from "./components/httpMethod/Fetch"


//import Routing from "./components/routing/Routing"



const App = () => {
    
    // const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    // useEffect(() => {
    //     setInterval(() => {
    //         setDateTime(new Date().toLocaleString());
    //     }, 1000);
    // }, []);

    // const [counter, Increment, Decrement] = useCounter();

  return (
    <div className="App">
        {/* <p>{`Current Date and Time: ${dateTime}`}</p>
        <div className="imgContainer">
            <img src={img1} alt="" />
            <a href='https://www.google.com' target="_blank" rel="noreferrer"><img src={img2} alt="" /></a>
        </div> */}
        {/* <Greeting/>   */}
        {/* <Calculator/> */}
        {/* <div>
            <h1>Simple Calculator</h1>
            <ul>
                <li>Sum: {add(5,3)}</li>
                <li>Sub: {sub(3,3)}</li>
                <li>Mul: {mul(2,3)}</li>
                <li>Div: {div(2,3)}</li>
            </ul>
        </div>
        <UseState/>
        <UseEffect/>
        <UseMemo/>
        <UseCallback/>
        <UseReducer/>
        <div>
            <h2>Custom Hooks</h2>
            <h3>{counter}</h3>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
        <UseRef/> */}
        {/* <Routing/> */}
        <Fetch/>
        <AxiosMethod/>
    </div>
  )
}

export default App