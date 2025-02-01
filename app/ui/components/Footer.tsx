import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';

const Footer: React.FC = () => {
    return (
        <section className="bg-[#002045] py-8 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="image">
                    <Image
                        src="/images/logo-white.svg"
                        alt="logo white"
                        width={200}
                        height={32}
                    />
                </div>
                <div className="navs">
                    <ul className="hidden md:flex items-center">
                        <li className="border-r border-[#164377] pr-6 py-4 mr-5 text-[#00E9EA] transition-colors">
                            Our Solutions
                        </li>
                        <li className="mr-5 cursor-pointer text-[#00E9EA] hover:text-[#1f81f0] transition-colors">
                            AnyCaas
                        </li>
                        <li className="mr-5 cursor-pointer text-[#00E9EA] hover:text-[#1f81f0] transition-colors">
                            AnyBaas
                        </li>
                        <li className="mr-5 cursor-pointer text-[#00E9EA] hover:text-[#1f81f0] transition-colors">
                            AnyPass
                        </li>
                    </ul>
                    <ul className="flex md:hidden items-center text-2xl sm:text-4xl text-[#1f81f0]">
                        <li className="mr-5">
                            <FaLinkedin />
                        </li>
                        <li className="mr-5">
                            <FaPhone />
                        </li>
                        <li className="mr-5">
                            <TbMailFilled />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
