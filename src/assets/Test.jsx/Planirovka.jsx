import { Link } from "react-router-dom";
import { handleClick } from "./AppartPent";
import { clearClicker } from "./AppartPent";

const Planirovka = ( { setCount }) => {
    return (
        <>
    <div className="planirovka-container">
        <Link to='/' id="toBack" onClick={() => clearClicker(setCount)}>Назад</Link>
            <div className="card slide2">
             <p style={{color: '#fff'}}>Какая планировка вам подходит?</p>
                <div className="img-container">
        
                 <div className="planirovka">
                        <img src='bootcamp - react проект (1)/plan2.png' alt="" />
                            <div className="img-container-bottom">
                                <p>Студия</p>
                                <input type="checkbox" onChange={() => handleClick(setCount)}/>
                                </div>
                            </div>
                                <div className="planirovka">
                                <img src='bootcamp - react проект (1)/plan2.png' alt="" />
                                <div className="img-container-bottom">
                                <p>1-2 спальни</p>
                                <input type="checkbox" onChange={() => handleClick(setCount)}/>
                                </div>
                            </div>
                            <div className="planirovka">
                                <img src='bootcamp - react проект (1)/plan2.png' alt="" />
                                <div className="img-container-bottom">
                                <p>3-4 спальни</p>
                                <input type="checkbox" onChange={() => handleClick(setCount)}/>
                                 </div>
                            </div>
                                </div>
                            </div>
                    <Link to='/area'><button className="next">Дальше</button></Link> 
                        
         </div>
        </>
    )
}

export default Planirovka