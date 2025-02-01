import Image from 'next/image';
import AboutText from '@/app/ui/About/AboutText';

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
            <Image
                src="/images/card.svg"
                alt="card image"
                width={70}
                height={80}
                className="absolute left-3 top-36 md:-left-9"
            />
            <Image
                src="/images/hike.svg"
                alt="Hike image"
                width={90}
                height={90}
                className="absolute top-60 left-20"
            />
            <Image
                src="/images/bank.svg"
                alt="Bank image"
                width={100}
                height={80}
                className="absolute top-28 right-3 md:-right-14"
            />

            <div className="text md:hidden">
                <AboutText />
            </div>
        </div>
    );
};

export default AboutImage;
