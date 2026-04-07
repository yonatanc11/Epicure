import { Children, type ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMobile } from '../hooks/useMobile'
import 'swiper/swiper-bundle.css'

interface CardCarouselProps {
    children: ReactNode
    slidesPerView?: { mobile: number; desktop: number }
}

export default function CardCarousel({ children, slidesPerView = { mobile: 2, desktop: 3 } }: CardCarouselProps) {
    const isMobile = useMobile()

    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={isMobile ? slidesPerView.mobile : slidesPerView.desktop}
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

