import Image from 'next/image';
import Navlinks from '@/app/ui/Hero/Navlinks';
import Button from '@/app/ui/common/Button';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar: React.FC = () => {
    return (
        <nav className="container mx-auto">
            {/* Nav Desktop */}
            <div className="md:flex justify-around py-4 hidden">
                <div className="logo">
                    <Image
                        src="/images/logo-white.svg"
                        height={32}
                        width={200}
                        alt="logo-white"
                    />
                </div>
                <div className="navlinks">
                    <Navlinks />
                </div>

                <div className="action-btn">
                    <Button label="Contact Us" type="transparent" />
                </div>
            </div>
            {/* Nav Mobile */}
            <div className="flex md:hidden justify-around py-4">
                <div className="logo">
                    <Image
                        src="/images/logo-white.svg"
                        height={32}
                        width={200}
                        alt="logo-white"
                    />
                </div>
                <div className="hamburger cursor-pointer text-3xl">
                    <RxHamburgerMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
