import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// const fname = "Mahendra Singh";
// const lname = "Dhoni";

//const date = new Date().toLocaleString();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    //Various methods to render component

    //1. Using React.StrictMode 
    // <React.StrictMode>
    //     <h1>Hi, Welcome to React Class</h1>
    //     <p>This is react</p>
    // </React.StrictMode>

    //2. Using React.Fragment
    // <React.Fragment>
    //     <h1>Hi, Welcome to React Class</h1>
    //     <p>This is react</p>
    // </React.Fragment>

    //3. Using <></>
    <>
        {/* Task 1 */}
        {/* <h1>Hi, Welcome to Bihar Cricket Stadium</h1>
        <p>{`Your Captain ${fname} ${lname}`}</p> */}

        {/* Task 2 */}
        <App/>
        {/* <p>{`Current Date and Time: ${date}`}</p> */}
    </>

    //4. Using array []
    // [
    //     <h1>Hi, Welcome to React Class</h1>,
    //     <p>This is react</p>
    // ]

    //5. Using div
    //     <h1>Hi, Welcome to React Class</h1>
    //     <p>This is react</p>
);