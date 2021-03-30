import React from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";


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
 

    
    </div>
  );
};

export default App;
