'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Waves: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', mouseMoveHandler);

        return () => window.removeEventListener('mousemove', mouseMoveHandler);
    }, []);

    const limitedX = Math.max(0, Math.min(mousePosition.x, 20));
    const limitedY = Math.max(0, Math.min(mousePosition.y, 20));

    return (
        <motion.img
            initial={{}}
            animate={{ x: limitedX, y: limitedY }}
            transition={{ duration: 1, ease: 'easeOut', repeat: 0 }}
            src="/backgrounds/WaveLinesFooterMain.svg"
            alt="footer bg"
            width={600}
            height={500}
            className="absolute w-full h-full z-10 hidden md:block"
        />
    );
};

export default Waves;
