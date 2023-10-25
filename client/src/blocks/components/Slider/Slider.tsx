import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.css'
import React, { FC } from 'react'
import { Autoplay, EffectCards, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IProps {
  images: string[]
}

export const Slider: FC<IProps> = ({ images }) => {
  return (
    <Swiper
      className="slider"
      effect="cards"
      cardsEffect={{
        perSlideOffset: 4,
        perSlideRotate: 1,
        slideShadows: false,
      }}
      loop={true}
      autoplay={{
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      direction="vertical"
      keyboard={{ enabled: true }}
      centeredSlides={true}
      slidesPerView="auto"
      navigation={true}
      pagination={true}
      modules={[Autoplay, EffectCards, Keyboard, Navigation, Pagination]}
    >
      {images.map((item, index) => (
        <SwiperSlide className="slider__slide" key={index}>
          <div className="slider__image-wr">
            <img className="slider__image" src={require(`@assets/images/${item}`)} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
