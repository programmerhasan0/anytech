'use client';
import { motion } from 'motion/react';

const MovingImage: React.FC<{
    width: number;
    height: number;
    src: string;
    className: string;
    duration: number;
    xValue?: string;
    yValue?: string;
}> = ({ src, className, duration, width, height, yValue }) => {
    return (
        <motion.img
            animate={{ y: yValue || '-10%' }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut',
            }}
            src={src}
            alt="card image"
            width={width}
            height={height}
            className={`absolute ${className}`}
        />
    );
};

export default MovingImage;
