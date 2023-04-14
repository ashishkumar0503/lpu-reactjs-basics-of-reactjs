import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Menu from "../Menu";

const Routing = () => {

    const Name = () => {
        return <h1>Hello, I am a Name Page</h1>
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={About}></Route>
        <Route exact path="/contact/" Component={Contact}></Route>
        <Route exact path="/contact/name" Component={Name}></Route>
      </Routes>
      <Menu/>
    </BrowserRouter>
  );
};

export default Routing;
