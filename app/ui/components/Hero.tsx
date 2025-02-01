import Image from 'next/image';
import Navbar from '@/app/ui/Hero/Navbar';
import Button from '@/app/ui/common/Button';

const Hero: React.FC = () => {
    return (
        <div className="wrapper relative">
            <section className="hero-section angled bg-gradient-to-bl from-[#005BC4] to-[#13A8ED] text-white relative clip-triangle-hero">
                <header>
                    <Navbar />
                </header>
                <div className="content md:flex items-center py-48 leading-9 container mx-auto">
                    <div className="titles font-montserrat font-semibold max-w-2xl">
                        <h1 className="text-5xl md:text-7xl">Embrace the</h1>
                        <h1 className="text-5xl md:text-7xl">
                            future of finance
                        </h1>
                        <p>
                            Reimagine financial services with AnyTech’s open
                            platform, distributed banking solution that powers
                            transformation
                        </p>
                        <Button label="React Out to Us" type="orange" />
                    </div>
                    <div className="image"></div>
                </div>
                <div
                    className="absolute top-0 right-0 h-full w-1/2 clip-triangle -z-10 bg-cover bg-cent hidden md:block"
                    style={{
                        backgroundImage: 'url("/images/hero-image.avif")',
                    }}
                ></div>
            </section>
            <div className="block md:hidden -mt-32">
                <Image
                    src="/images/hero-image.avif"
                    alt="Hero Image Mobile"
                    width={500}
                    height={500}
                    className="w-full clip-triangle-mobile"
                />
            </div>
        </div>
    );
};

export default Hero;
