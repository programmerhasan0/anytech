import Image from 'next/image';
import Subtitle from '@/app/ui/common/Subtitle';
import Card from '../Philosophy/Card';

const Philosophy: React.FC = () => {
    return (
        <section className="container mx-auto flex flex-col items-center pt-10 pb-20">
            <Subtitle label="our philosophy" className="text-center" />
            <h1 className="text-3xl md:text-6xl text-[#0B305B] text-center font-montserrat font-semibold tracking-wider">
                Human-centred innovation
            </h1>
            <Image
                src="/images/ai-diagram.avif"
                width={1138}
                height={375}
                alt="Ai Diagram"
                className="w-10/12 max-w-[100%] h-full py-[32px] hidden md:block"
            />
            <Image
                src="/images/ai-diagram-mobile.avif"
                width={1138}
                height={375}
                alt="Ai Diagram"
                className="w-10/12 h-full py-[32px] block md:hidden"
            />
            <Card />
        </section>
    );
};

export default Philosophy;
