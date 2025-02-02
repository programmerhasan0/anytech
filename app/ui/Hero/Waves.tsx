'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

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
        <motion.div
            initial={{ x: '-50%' }}
            animate={{ x: limitedX, y: limitedY }}
            transition={{ duration: 1, ease: 'easeOut', repeat: 0 }}
            className="absolute w-full h-full z-[1] overflow-hidden clip-triangle-hero bg-cover hidden md:block"
            style={{
                backgroundImage: 'url("/backgrounds/WaveLinesDesktopMain.svg")',
            }}
        ></motion.div>
    );
};

export default Waves;
