import React, {useRef} from "react";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider(){
  const swiperRef = useRef(null);

    const slidePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const slideNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
            console.log("next");
        }
    };
    return (
        <div>
        <div className="slider">
          <h2>POPULAR THIS WEEK</h2>
          <div className="navigation">
            <button onClick={slidePrev}>
              <i className="fa-solid fa-angle-left fa-2xl" style={{ color: "#a7a6a6" }}></i>
            </button>
            <button onClick={slideNext}>
              <i className="fa-solid fa-angle-right fa-2xl" style={{ color: "#FFF" }}></i>
            </button>
          </div>
        </div>
        <div style={{"width":"1146px","height":"300px"}}>
            <Swiper
          ref={swiperRef}
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          enabled: false

        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide><img src="imgs/br bad.png" alt="" className="slider-image"/>
      </SwiperSlide>
      <SwiperSlide><img src="imgs/rain.png" alt="" className="slider-image"/>
      </SwiperSlide>
      <SwiperSlide><img src="imgs/life in a year.png" alt="" className="slider-image"/>
      </SwiperSlide>
      <SwiperSlide><img src="imgs/money heist.png" alt="" className="slider-image"/>
      </SwiperSlide>
      <SwiperSlide><img src="imgs/squid game.png" alt="" className="slider-image"/>
      </SwiperSlide>
        <SwiperSlide><img src="imgs/br bad.png" alt="" className="slider-image"/>
        </SwiperSlide>
        <SwiperSlide><img src="imgs/rain.png" alt="" className="slider-image"/>
        </SwiperSlide>
        <SwiperSlide><img src="imgs/life in a year.png" alt="" className="slider-image"/>
        </SwiperSlide>
        <SwiperSlide><img src="imgs/money heist.png" alt="" className="slider-image"/>
        </SwiperSlide>
        <SwiperSlide><img src="imgs/squid game.png" alt="" className="slider-image"/>
        </SwiperSlide>
      </Swiper></div>
       </div>
    );
}


export default Slider;