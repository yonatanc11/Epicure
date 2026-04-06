import { Children, type ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

interface CardCarouselProps {
    children: ReactNode
    slidesPerView?: number
}

export default function CardCarousel({ children, slidesPerView = 2 }: CardCarouselProps) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={slidesPerView}
            grabCursor={true}
        >
            {Children.map(children, (child, index) => (
                <SwiperSlide key={index}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

