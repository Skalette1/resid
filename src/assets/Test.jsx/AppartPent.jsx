import { Link } from "react-router-dom";
import './test.css'

export const handleClick = (setCount) => {
    setCount(count => count + 1)
}

export const clearClicker = (setCount) => {
    setCount(0)
}

const TestCarousel = ({ count, setCount }) => {
    return (
        <>  
        <div className="test-carousel">
                <Link to='/' id="toBack" onClick={() => clearClicker(setCount)}>Назад</Link>
                <h2>Какая недвижимость вас интересует?</h2>
                <div className="slide1">
                  <div className="card card-appartament">
                        <img src='bootcamp - react проект (1)/appartaments.png' alt="" />
                        <div className="slide1-bottom">
                        <p>Квартиры</p>
                        <input type="checkbox" onChange={() => handleClick(setCount)}/>
                        </div>
                    </div>
                    <div className="card card-penthouse">
                        <img src='bootcamp - react проект (1)/penthouse.png' alt="" />
                        <div className="slide1-bottom">
                        <p>Пентхаусы</p>
                        <input type="checkbox" onChange={() => handleClick(setCount)}/>
                        </div>
                    </div>  
                </div>
                <Link to='/planirovka'><button className="next">Дальше</button></Link>
            </div>
        </>
    )
}

export default TestCarousel
