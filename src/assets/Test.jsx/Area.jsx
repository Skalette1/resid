import { Link } from "react-router-dom"
import { handleClick } from "./AppartPent"
import { clearClicker } from "./AppartPent"

const Area = ( { setCount } ) => {
    return (
        <>
        <div className="Areaa">
          <Link to='/' id="toBack" onClick={() => clearClicker(setCount)}>Назад</Link>
            <h2>Какую площадь объекта вы рассматриваете?</h2>
            <div className="area-container">
                    <div className="area">
                        <img src='bootcamp - react проект (1)/stud.png' alt="" />
                      <div className="area-bottom">
                        <p>26 м² — 100 м²</p>
                        <input type="checkbox" onChange={() => handleClick(setCount)}/>
                         </div>
                     </div>
                    <div className="area">
                    <img src='bootcamp - react проект (1)/stud.png' alt="" />
                      <div className="area-bottom">
                        <p>100 м² — 150 м²</p>
                        <input type="checkbox" onChange={() => handleClick(setCount)}/>
                         </div>
                     </div>
                    <div className="area">
                    <img src='bootcamp - react проект (1)/stud.png' alt="" />
                      <div className="area-bottom">
                        <p>150 м² — 192 м²</p>
                        <input type="checkbox" onChange={() => handleClick(setCount)}/>
                         </div>
                     </div>
                </div>
            <Link to='/message'><button className="next">Дальше</button></Link> 
          </div>
        </>
    )
}

export default Area