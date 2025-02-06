import Test1 from "./AppartPent"
import { Link } from "react-router-dom";


const Test = () => {
    return (
        <>
          <div className="test">
            <h1>Какая квартира <br /> подойдет именно вам?</h1>
            <p style={{color: '#E7E9D3'}}>Ответьте на 4 вопроса, чтобы подобрать <br />
             идеальный вариант недвижимости</p>
             <Link to='/test'><button>Пройти тест</button></Link>
             <div className="test-img">
             <img src="bootcamp - react проект (1)/Group 10144.png" alt="" />
             <img src="bootcamp - react проект (1)/Group 10144.png" alt="" />
             </div>
        </div>
        </>
    )
}

export default Test