import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Subtitle from '@/app/ui/common/Subtitle';
import { SlideData } from '@/app/definitions/types';

interface Props {
    slide: SlideData;
}

const Slide: React.FC<Props> = ({ slide }) => {
    return (
        <>
            {/* Slider Desktop */}
            <div className="slide-wrapper hidden md:flex items-center justify-between">
                <div className="rounded-md w-1/2">
                    <Subtitle label={slide.subtitle} />
                    <h2 className="text-2xl md:text-5xl font-montserrat font-semibold mb-10">
                        {slide.title}
                    </h2>
                    <p className="font-semibold font-montserrat mb-5">
                        {slide.description1}
                    </p>
                    <p className="font-montserrat">{slide.description2}</p>
                </div>
                <div className="image">
                    <Image
                        src={slide.image}
                        width={500}
                        height={500}
                        alt={`image ${slide.subtitle}`}
                        className="h-[425px] rounded-xl"
                    />
                </div>
            </div>
            {/* Slider Mobile */}
            <div className="slide-wrapper block md:hidden">
                <div className="rounded-md">
                    <Subtitle label={slide.subtitle} className="mt-4" />
                    <h2 className="text-2xl md:text-5xl font-montserrat font-semibold mb-2">
                        {slide.title}
                    </h2>
                    <Image
                        src={slide.image}
                        width={500}
                        height={500}
                        alt={`image ${slide.subtitle}`}
                        className="w-full h-40 rounded-xl mb-4"
                    />
                    <p className="font-semibold font-montserrat mb-5 text-sm">
                        {slide.description1}
                    </p>
                    <p className="font-montserrat text-sm mb-4">
                        {slide.description2}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Slide;
