import React from "react";
import Bar from "./animation/barUI/Bar";
import Circle from "./animation/circle/Circle";
import ThreeDe from "./animation/svgLayers/ThreeDe";


import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const  digital_root =n=> {
    let result=0
  const num = n.toString().split('').map(nu => {
  return  result +=Number(nu)
  });
 console.log( result > 9 ?  digital_root(result):result ,num)
  }
  digital_root(232)
  return (
  
    <div>
    <Navbar/> 
    <Bar/>

    
    </div>
  );
};

export default App;
