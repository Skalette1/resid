import { Popup, Button } from 'antd-mobile';
import React, { useState } from 'react';
import { CloseOutline } from 'antd-mobile-icons'; 



const Rieltor = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="rieltor-container">
            <div className="rieltor-left">
                <p style={{textAlign: 'center'}}>СПЕЦИАЛЬНО ДЛЯ ВАС</p>
                <h2>Персональная <br /> презентация West Garden</h2>
                <ul>
                    <li>Подробно расскажем про жилой комплекс</li>
                    <li>Ознакомитесь со всеми планировками и ценами</li>
                    <li>Прогуляетесь по благоустроенной набережной</li>
                </ul>
                <p>Закрепить за номером</p>
                <div className="rieltor-left-bottom">
                <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required />
                <Button onClick={() => setVisible(true)}>Записаться на презентацию</Button>
                       <Popup
                       visible={visible}
                       onMaskClick={() => setVisible(true)}
                       bodyStyle={{background: 'transparent'}}
                       position="bottom"
                       >
                       <div style={{ position: 'relative' }}>
                          <div 
                              style={{
                                  position: 'absolute',
                                  top: '-380px',
                                  right: '280px',
                                  cursor: 'pointer',
                                  zIndex: 1000,
                                }}
                          onClick={() => setVisible(false)}>
                          <CloseOutline fontSize={40} color="#fff"/>
                          </div>
                      <div className="popup" style={{transform: 'translateY(-600%)'}}>
                        <h1>В фигме ничего не нашел :(</h1>
                      </div>
                  </div>
                       </Popup>
                </div>
            </div>
            <img src="bootcamp - react проект (1)/Daco_5863980.png" width={480} height={560} style={{position: 'relative'}}/>
            <div className="canelo-container">
            <h4>Canelo</h4>
            <p>ведущий эксперт <br />по недвижимости<br /> в ESTES</p>
            </div>
        </div>
    )
}

export default Rieltor