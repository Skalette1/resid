import './variant.css'
import { Popup, Button } from 'antd-mobile';
import React, { useState } from 'react';
import { CloseOutline } from 'antd-mobile-icons'; 




const Variant = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
        <div className="variant-container">
            <h1>2 варианта отделки</h1>

            <div className="white">
                <div className="white-top">
                    <h3>Светлая отделка</h3>
                    <Button onClick={() => setVisible(true)} id='visible' style={{background: '#773844', color: '#fff', padding: '1rem', fontSize: '1.1rem'}}>Скачать дизайн-буклет</Button>
                    <Popup
                    visible={visible}
                    bodyStyle={{background: 'transparent'}}
                    position="bottom"
                    >
                   <div style={{ position: 'relative' }}>
                           <div 
                               style={{
                                   position: 'absolute',
                                   top: '-170px',
                                   right: '280px',
                                   cursor: 'pointer',
                                   zIndex: 1000,
                                 }}
                           onClick={() => setVisible(false)}>
                           <CloseOutline fontSize={40} color="#fff"/>
                           </div>
                       <div className="popup">
                           <img src="bootcamp - react проект (1)/whitee.png" alt="" />
                           <div className="pop-right">
                               <h1>Получите дизайн-буклет с подробным описанием отделки светлого интерьера</h1>
                               <p style={{fontSize: '20px', color: '#646562'}}>PDF, можно скачать прямо сейчас</p>
                               <input type="tel" placeholder="+7 ___ ___-__-__"/>
                           <Button onClick={() => setVisible(false)}>Получить планировки</Button>
                           <p id="pop-foot">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                           </div>
                       </div>
                   </div>
                    </Popup>
                </div>
                <div className="white-mid">
                    <img src="bootcamp - react проект (1)/Light_1.png" alt="" />

                    <div className="white-inter">
                        <img src="bootcamp - react проект (1)/Group 1926.png" alt="" />
                        <p style={{fontSize: '12px', color: '#773844'}}>ОСОБЕННОСТИ ИНТЕРЬЕРА</p>
                        <p>Сочетание белых стен и светлой <br /> напольной доски с текстурой дерева расширяет пространство, формируя <br />гармоничную, наполненную светом <br />атмосферу</p>
                    </div>

                    <img src="bootcamp - react проект (1)/Light_2.png" alt="" />
                    <img src="bootcamp - react проект (1)/Light_4.png" alt="" />
                </div>
            </div>
            <div className="white">
                <div className="white-top">
                    <h3>Тёмная отделка</h3>
                    <Button onClick={() => setVisible(true)} id='visible' style={{background: '#773844', color: '#fff', padding: '1rem', fontSize: '1.1rem'}}>Скачать дизайн-буклет</Button>
                    <Popup
                    visible={visible}
                    bodyStyle={{background: 'transparent'}}
                    position="bottom"
                    >
                   <div style={{ position: 'relative' }}>
                           <div 
                               style={{
                                   position: 'absolute',
                                   top: '-170px',
                                   right: '280px',
                                   cursor: 'pointer',
                                   zIndex: 1000,
                                 }}
                           onClick={() => setVisible(false)}>
                           <CloseOutline fontSize={40} color="#fff"/>
                           </div>
                       <div className="popup">
                           <img src="bootcamp - react проект (1)/whitee.png" alt="" />
                           <div className="pop-right">
                               <h1>Получите дизайн-буклет с подробным описанием отделки светлого интерьера</h1>
                               <p style={{fontSize: '20px', color: '#646562'}}>PDF, можно скачать прямо сейчас</p>
                               <input type="tel" placeholder="+7 ___ ___-__-__"/>
                           <Button onClick={() => setVisible(false)}>Получить планировки</Button>
                           <p id="pop-foot">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                           </div>
                       </div>
                   </div>
                    </Popup>
                </div>
                <div className="white-mid">
                    <img src="bootcamp - react проект (1)/Dark_1.png" alt="" />

                    <div className="black-inter">
                        <img src="bootcamp - react проект (1)/Group 1927.png" alt="" />
                        <p style={{fontSize: '12px', opacity: '.8'}}>ОСОБЕННОСТИ ИНТЕРЬЕРА</p>
                        <p>Отделка в тёмном варианте формируется за счет нейтральных оттенков стен, а также напольной доски, выполненной в цвете темного дерева
                        </p>
                    </div>

                    <img src="bootcamp - react проект (1)/Dark_2.png" alt="" />
                    <img src="bootcamp - react проект (1)/Dark_3.png" alt="" />
                </div>
            </div>

            
        </div>
        </>
    )
}

export default Variant