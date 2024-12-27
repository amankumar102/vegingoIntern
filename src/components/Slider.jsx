// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from './Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Slider({items}) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
    >
        {items.map((item)=> (
            <SwiperSlide key={item.id}>
                <Card name={item.title} image={item.image}  />
            </SwiperSlide>
        ) )}
    </Swiper>
);
};

export default Slider;