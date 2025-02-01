'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const Banks: React.FC = () => {
    const bankImages: string[] = [
        '/images/banks/bank1.webp',
        '/images/banks/bank2.webp',
        '/images/banks/bank3.webp',
        '/images/banks/bank4.webp',
        '/images/banks/bank5.webp',
        '/images/banks/bank6.webp',
        '/images/banks/bank7.webp',
        '/images/banks/bank8.webp',
        '/images/banks/bank9.webp',
        '/images/banks/bank10.webp',
        '/images/banks/bank11.webp',
        '/images/banks/bank12.webp',
        '/images/banks/bank13.webp',
        '/images/banks/bank14.webp',
        '/images/banks/bank15.webp',
    ];
    return (
        <>
            <div className="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-[34px] mt-44">
                {bankImages.map((image, idx) => (
                    <div className="wrapper" key={idx}>
                        <div className="flex items-stretch bg-cover" key={idx}>
                            <Image
                                src={image}
                                width={603}
                                height={414}
                                alt="Image"
                                className="w-full h-[80px]"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider block sm:hidden mt-8">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={30}
                >
                    {bankImages.map((image, idx) => (
                        <SwiperSlide key={idx}>
                            <Image
                                src={image}
                                width={603}
                                height={414}
                                alt="Image"
                                className="w-full h-[80px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Banks;
