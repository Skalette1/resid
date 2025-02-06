import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules";
import { Popup, Button } from 'antd-mobile';
import React, { useState } from 'react';
import { CloseOutline } from 'antd-mobile-icons'; 


const images = [
    <img 
    src='bootcamp - react проект (1)/slide-1.png' 
    style={{ width: "100%", height: "auto" }}
    />,
    <img 
    src="bootcamp - react проект (1)/slide-2.png"
    style={{ width: "100%", height: "auto" }}
     />,
    <img 
    src="bootcamp - react проект (1)/slide-3.png"
    style={{ width: "100%", height: "auto" }}
     />,
    <img 
    src="bootcamp - react проект (1)/slide-4.png"
    style={{ width: "100%", height: "auto" }}
  />,
]

const RiverLine = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
        <h2 style={{textAlign: 'right', margin: '1rem'}}>Жилой комплекс состоит <br /> из двух кластеровф</h2>
        <div className="river-line">
            <div className="river-top">
            <h2 style={{fontSize: '56px'}}>River Line</h2> 
            <svg width="72" height="32" viewBox="0 0 72 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M52.8392 5.27899C49.8124 9.12511 38.9546 9.30287 35.2836 5.58064C31.8457 9.4106 19.9605 9.84693 16.0839 2.52098L18.3943 0.0484785C21.8433 5.21435 30.9071 5.76918 34.9559 0.0484785C35.2122 0.0191519 35.4698 0.00297119 35.7279 0C38.938 5.23051 49.2959 5.38672 52.2283 0C52.4005 0 53.1891 0 53.1891 0C57.0768 5.00965 65.6964 4.97733 69.7785 0.220854L72 2.16546C68.3234 9.65301 57.2323 9.42676 52.8392 5.27899ZM19.6217 12.9443C22.8318 18.1748 33.1898 18.331 36.1222 12.912H37.083C40.9707 17.9216 49.5903 17.8893 53.6723 13.1328L55.8939 15.0774C52.2394 22.6189 41.1484 22.3711 36.7553 18.2233C33.7285 22.0694 22.8707 22.2472 19.1996 18.5249C15.7674 22.3549 3.87658 22.7858 0 15.4653L2.28818 12.9766C5.73712 18.1425 14.801 18.6973 18.8497 12.9766C19.1063 12.9527 19.364 12.9419 19.6217 12.9443ZM29.402 23.7501C29.6583 23.7207 29.916 23.7046 30.174 23.7016C33.3841 28.9321 43.7421 29.0883 46.6745 23.6746C46.8467 23.6746 47.6353 23.6746 47.6353 23.6746C51.523 28.6843 60.1426 28.652 64.2246 23.8955L66.4462 25.8401C62.7917 33.3815 51.7007 33.1337 47.3076 28.986C44.2808 32.8321 33.423 33.0098 29.7519 29.2876C26.3197 33.1176 14.4289 33.5539 10.5523 26.228L12.8405 23.7501C16.2894 28.9321 25.3533 29.4869 29.402 23.7501Z" fill="white"/></svg>
            </div>
         <div className="river-bottom">
         <p style={{fontSize: '20px'}}>Восемь жилых корпусов по 12-14 этажей <br /> выстроенны вдоль реки Раменки</p>
         <Button onClick={() => setVisible(true)}>Посмотреть планировки</Button>
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
            <img src="bootcamp - react проект (1)/buklet.png" alt="" />
            <div className="pop-right">
                <h1>Получите подробное <br />описание и цены на <br />свободные планировки <br />в кластере River Line</h1>
                <p style={{fontSize: '20px', color: '#646562'}}>PDF, можно скачать прямо сейчас</p>
                <input type="tel" placeholder="+7 ___ ___-__-__"/>
            <Button onClick={() => setVisible(false)}>Получить планировки</Button>
            <p id="pop-foot">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
            </div>
        </div>
    </div>
         </Popup>
         </div>

         <div className="river-line-carusel">
            <Swiper 
            modules={[Navigation]}
            navigation
            loop
            speed={700}
            spaceBetween={20}
            slidesPerView={1}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        {image}
                    </SwiperSlide>
                ))}
            </Swiper>
         </div>
    </div>
        </>
    )
}

export default RiverLine