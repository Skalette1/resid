import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules";


const images = [
  <img 
  src='bootcamp - react проект (1)/img-1.png' 
  style={{ width: "100%", height: "auto" }}
  />,
  <img 
  src="bootcamp - react проект (1)/img-2.png"
  style={{ width: "100%", height: "auto" }}
   />,
  <img 
  src="bootcamp - react проект (1)/img-3.png"
  style={{ width: "100%", height: "auto" }}
   />,
  <img 
  src="bootcamp - react проект (1)/img-4.png"
  style={{ width: "100%", height: "auto" }}
/>,
]

const PhotoCarousel = () => {
  return (
    <div className="carusel">
      <h1>Наслаждайтесь видами из окон своей квартиры</h1>
      <Swiper 
      modules={[Navigation, Pagination]}
      navigation
      pagination = {{clickable: true,
        renderBullet: (index, className) => {
          const words = ['Поклонная гора', 'Москва Сити', 'Матвеевский лес', 'Район раменки']
          return `<span class="${className}">${words[index]}</span>`
        }
      }}
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
  );
};

export default PhotoCarousel;