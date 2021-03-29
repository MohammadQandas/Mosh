import TopSvg from "../../assets/top.svg"
import BackSvg from "../../assets/back.svg";
import TippytopSvg from "../../assets/tippytop.svg";
import MidSvg from "../../assets/mid.svg";
import "./svgLayers.css"
import { useState } from "react";
const ThreeDe = () => {
const [state,setState]=useState('')

    return (
        <div>
              <div className="layers">
        <img className="back" src={BackSvg} alt="BackSvg" />
        <img className="mid" src={MidSvg} alt="midSvg" />
        <img className="top" src={TopSvg} alt="TopImg" />
        <img className="tippy" src={TippytopSvg} alt="Tippy" />
      </div>
        </div>
    )
}

export default ThreeDe
