import './inteko.css'

const Inteko = () => {
    return (
        <div className="inteko-container">
            <div className="inteko-top">
                <div className="developer">
                    <h1>Девелопер <br />ИНТЕКО</h1>
                    <p>Реализует лучшие проекты в сфере <br />
                    недвижимости на основе анализа <br />
                    и прогноза предпочтений человека</p>
                </div>
                <div className="documents">
                    <h5>Документы West Garden</h5>
                    <a href="#">Проектная документация</a>
                    <a href="#">Разрешение на строительство</a>
                    <a href="#">Проектная декларация (1 очередь)</a>
                    <a href="#">Проектная декларация (2 очередь)</a>
                </div>
            </div>
        <div className="info">
            <div className="info-card">
                <h5>20 лет</h5>
                <p>на рынке недвижимости Москвы <br /> и регионов</p>
            </div>
            <div className="info-card">
                <h5>80+ проектов</h5>
                <p>жилых домов сдано в Москве</p>
            </div>
            <div className="info-card">
                <h5>5 000 000 м²</h5>
                <p>общая площадь готовых объектов</p>
            </div>
            <div className="info-card">
                <h5>500 сотрудников</h5>
                <p>в штате компании</p>
            </div>
        </div>
    </div>
    )
}

export default Inteko