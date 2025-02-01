import { Metadata } from 'next';
import Hero from '@/app/ui/components/Hero';
import About from '@/app/ui/components/About';
import Philosophy from '@/app/ui/components/Philosophy';
import Technology from '@/app/ui/components/Technology';
import Trusties from '@/app/ui/components/Truesties';
import Contact from '@/app/ui/components/Contact';
import Footer from '@/app/ui/components/Footer';
import Copyright from '@/app/ui/components/Copyright';

export const metadata: Metadata = {
    title: 'Home Page | AnyTech',
};

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <About />
            <Philosophy />
            <Technology />
            <Trusties />
            <Contact />
            <Footer />
            <Copyright />
        </main>
    );
};

export default Home;
