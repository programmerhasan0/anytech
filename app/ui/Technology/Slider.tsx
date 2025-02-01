'use client';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { sliderData } from '@/app/data/sliderData';
import Slide from '@/app/ui/Technology/Slide';
import SliderAction from '@/app/ui/Technology/SliderAction';

const Slider: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className="m-8">
            <div className="actions mb-10 hidden md:block">
                <SliderAction goToSlide={goToSlide} activeSlide={activeSlide} />
            </div>
            <div className="slider">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        console.log(swiper.activeIndex);
                        return setActiveSlide(swiper.activeIndex);
                    }}
                    className="shadow-[0px_16px_21px_#cfe9f7] flex items-center justify-center rounded-xl"
                >
                    {sliderData.map((slide, idx) => (
                        <SwiperSlide
                            className="md:px-16 md:py-11 px-4 py-2"
                            key={idx}
                        >
                            <Slide slide={slide} key={idx} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
