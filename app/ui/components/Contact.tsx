import Button from '@/app/ui/common/Button';
import Waves from '@/app/ui/Contact/Waves';

const Contact: React.FC = () => {
    return (
        <section className=" relative bg-[radial-gradient(24.45%_88.58%_at_23.57%_2%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] px-5 py-40 text-white clip-triangle-footer md:clip-triangle-footer-md">
            <Waves />
            <div className="wrapper container mx-auto relative z-20">
                <h1 className="text-2xl md:text-6xl font-montserrat font-semibold">
                    Legacy no longer
                </h1>
                <p className="text-base md:text-xl font-montserrat font-semibold mt-6 mb-6">
                    Talk to us to find out how we can transform your
                    organisation for the future
                </p>
                <Button label="Contact Us" type="orange" />
            </div>
        </section>
    );
};
export default Contact;
