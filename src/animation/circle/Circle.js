
import reactLogo from "../../assets/react.jpg";
import Mo from '../../assets/Mo.jpg'
import './circle.css'
const Circle = () => {
    return (
        <div>
            <div className="earth-demo">
        <div className="earth">
          <div className="more-info">
            <h1>Mohammad Qandas</h1>
            <ul>
              <li>Skills</li>
              <li>ReactJs </li>
              <li>Redux</li>
              <li>Css(Animation)_Material-ui_Svg</li>
         
            </ul>
          </div>7
          <img className="original" src={Mo} alt="be original" />
        </div>

        <div className="moon-container">
          <div className="moon">
            <img
              src={reactLogo}
              alt="Moon"
            />
          </div>
        </div>
      </div>
        </div>
    )
}

export default Circle
