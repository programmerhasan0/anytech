import Image from 'next/image';
import AboutText from '@/app/ui/About/AboutText';
import MovingImage from '@/app/ui/common/MovingImage';

const AboutImage: React.FC = () => {
    return (
        <div className="relative md:shadow-[0px_23px_30px_0px_#16437763] w-[400px] overflow-hidden md:overflow-visible">
            <Image
                src="/images/about.avif"
                alt="about image"
                width={500}
                height={500}
                className=""
            />

            <MovingImage
                className="left-3 top-36 md:-left-9"
                src="/images/card.svg"
                duration={2}
                width={70}
                height={80}
            />
            <MovingImage
                src="/images/hike.svg"
                duration={3}
                width={90}
                height={90}
                className="top-60 left-20"
            />
            <MovingImage
                src="/images/bank.svg"
                duration={2}
                width={100}
                height={80}
                className="top-28 right-3 md:-right-14"
            />

            <div className="text md:hidden">
                <AboutText />
            </div>
        </div>
    );
};

export default AboutImage;
