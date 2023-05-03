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

import Redux from "./components/redux/Redux"

//import Cards from "./components/Cards/Cards"
//import StopWatch from "./components/StopWatch/StopWatch"

//import Forms from "./components/forms/Forms"

//import UseContext from "./components/hooks/UseContext"
// import AxiosMethod from "./components/httpMethod/AxiosMethod"
// import Fetch from "./components/httpMethod/Fetch"


//import Routing from "./components/routing/Routing"



const App = () => {

    // const card1 = {
    //     img: "https://glints.com/id/lowongan/wp-content/uploads/2020/10/logo-reactjs.jpg",
    //     title: "React JS",
    //     desc: "Framework of JS",
    //   }
    //   const card2 = {
    //     img: "https://th.bing.com/th/id/OIP.6ahbWjp_g9hqhaTDSJOL1QHaEK?pid=ImgDet&rs=1",
    //     title: "Javascript",
    //     desc: "JS",
    //   }
    //   const card3 = {
    //     img: "https://th.bing.com/th/id/R.cea146585c3e07462d1a2a9b50f69ea1?rik=MsgWQxTdZI%2fMSQ&riu=http%3a%2f%2fwww.angularjstraininginchennai.in%2fwp-content%2fuploads%2f2016%2f04%2fangular_bg1-3.png&ehk=yNqko8k%2fWC7sSy2QrYokVY7Oxpw8Ij9K%2fdz3eDBjcZA%3d&risl=&pid=ImgRaw&r=0",
    //     title: "Angular",
    //     desc: "Framework of JS",
    //   }
    //   const card4 = {
    //     img: "https://th.bing.com/th/id/R.e05fdd7d2fdaad0df0a880e838478dc2?rik=pYFgDlZmAy%2f51A&riu=http%3a%2f%2fmichaelsoriano.com%2fwp-content%2fuploads%2f2020%2f07%2fnextjs.png&ehk=60MYVjBQiovWavP66fAFCNq%2fB03RtkqdUZJ7u3cOEdo%3d&risl=&pid=ImgRaw&r=0",
    //     title: "Next JS",
    //     desc: "Framework of JS",
    //   }


    
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
        {/* <Fetch/>
        <AxiosMethod/> */}
        {/* <UseContext/> */}
        {/* <Forms/> */}

        {/* <Cards
            card1 = {card1}
            card2 = {card2}
            card3 = {card3}
            card4 = {card4}
        /> */}

        {/* <StopWatch/> */}
    </div>
  )
}

export default App