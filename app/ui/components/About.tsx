import AboutImage from '@/app/ui/About/AboutImage';
import Subtitle from '@/app/ui/common/Subtitle';
import AboutText from '@/app/ui/About/AboutText';
import MovingImage from '@/app/ui/common/MovingImage';

const About: React.FC = () => {
    return (
        <section className="wrapper bg-gradient-to-bl from-[#FFFFFF] via-[#ffffff] to-[#EEF5FD] pt-20 pb-40 clip-triangle-hero">
            <div className="container mx-auto items-center justify-center block md:flex relative">
                <div className="content max-w-[550px]">
                    <Subtitle label="powering the future of finance" />
                    <h2 className="text-5xl text-[#0B305B] font-semibold tracking-wide font-montserrat mb-10 ">
                        Uncovering new ways to delight customers
                    </h2>
                    <div className="text hidden md:block">
                        <AboutText />
                    </div>
                </div>
                <div className="image flex items-center justify-center md:ml-20 h-full ">
                    <MovingImage
                        src="/backgrounds/about-background.svg"
                        width={500}
                        height={500}
                        className="absolute overflow-visible"
                        duration={5}
                        yValue="-5%"
                    />
                    <AboutImage />
                </div>
            </div>
        </section>
    );
};
export default About;
