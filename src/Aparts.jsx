const Aparts = () => {
    function handleClick() {
        alert("тебе не по карману :)")
    }
    return (
        <>
        <h1>Более 100 свободных квартир <br /> редких форматов</h1>
        <div className="aparts">
            <div className="aparts-left">
                <h3>
                Свободная планировка, <br /> возможность объединить <br /> квартиры до 500 м²
                </h3>
                <p> Не ограничивайте себя при создании <br />
                 жилого пространства Вашей мечты, <br />
                 воспользуйтесь возможностью увеличения <br />
                 площади до комфортного Вам размера</p>
                 <a href="" id="href" onClick={handleClick}>Узнать стоимость</a>
            </div>
            <img src="bootcamp - react проект (1)/aparts.png" alt="" />
        </div>
        <div className="aparts">
            <div className="aparts-left">
                <h3>
                Свободная планировка, <br /> возможность объединить <br /> квартиры до 500 м²
                </h3>
                <p> Не ограничивайте себя при создании <br />
                 жилого пространства Вашей мечты, <br />
                 воспользуйтесь возможностью увеличения <br />
                 площади до комфортного Вам размера</p>
                 <a href="" id="href" onClick={handleClick}>Узнать стоимость</a>
            </div>
            <img src="bootcamp - react проект (1)/aparts.png" alt="" />
        </div>
        <div className="aparts">
            <div className="aparts-left">
                <h3>
                Свободная планировка, <br /> возможность объединить <br /> квартиры до 500 м²
                </h3>
                <p> Не ограничивайте себя при создании <br />
                 жилого пространства Вашей мечты, <br />
                 воспользуйтесь возможностью увеличения <br />
                 площади до комфортного Вам размера</p>
                 <a href="" id="href" onClick={handleClick}>Узнать стоимость</a>
            </div>
            <img src="bootcamp - react проект (1)/aparts.png" alt="" />
        </div>
        </>
    )
}

export default Aparts