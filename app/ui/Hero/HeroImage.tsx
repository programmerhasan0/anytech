'use client';
import { motion } from 'motion/react';

const HeroImage: React.FC = () => {
    return (
        <motion.div
            initial={{ x: '50%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.5, ease: 'linear', repeat: 0 }}
            className="absolute top-0 right-0 h-full w-1/2 clip-triangle  bg-cover bg-cent hidden md:block"
            style={{
                backgroundImage: 'url("/images/hero-image.avif")',
            }}
        ></motion.div>
    );
};

export default HeroImage;
