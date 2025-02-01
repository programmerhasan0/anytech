import Subtitle from '@/app/ui/common/Subtitle';
import Slider from '@/app/ui/Technology/Slider';

const Technology: React.FC = () => {
    return (
        <section className="bg-gradient-to-bl from-[#FFFFFF] via-[#ffffff] to-[#EEF5FD] pt-20 pb-40 clip-triangle-hero">
            <div className="container mx-auto">
                <div className="titles text-center">
                    <Subtitle label="technology build for you" />
                    <h1 className="text-3xl md:text-7xl font-montserrat font-semibold text-[#0B305B]">
                        The future of finance
                    </h1>
                </div>
                <Slider />
            </div>
        </section>
    );
};

export default Technology;
