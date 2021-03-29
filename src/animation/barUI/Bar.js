import React from 'react'
import "./bar.css"
const Bar = () => {


    
    return (
        <div className="wrap">
         <div className="bar">
           <h3>Java Script <abbr className="abbr">80%</abbr></h3>
                 <span> </span>
             </div>  

             <div  className="bar">
           <h3>ReactJs <abbr className="abbr">70%</abbr></h3>
                 <span> </span>
             </div>   

               <div  className="bar">
           <h3>CSS<abbr className="abbr">75%</abbr></h3>
                 <span> </span>
             </div>   
        </div>
    )
}

export default Bar
