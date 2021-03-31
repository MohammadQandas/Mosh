import React from "react";
import Navbar1 from "./components/Navbar/Navbar1";

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
   <Navbar1/>
 

    
    </div>
  );
};

export default App;
