'use client';
import { phisophyCardData } from '@/app/data/philosophyCardData';
import Image from 'next/image';
import { motion } from 'motion/react';

const Card: React.FC = () => {
    return (
        <motion.div
            initial={{ y: '25%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="card block md:flex gap-6"
        >
            {phisophyCardData.map((card, idx) => (
                <div
                    className="bg-[#F8FCFF] max-w-[400px] py-8 px-10 rounded-xl mb-4"
                    key={idx}
                >
                    <Image
                        src={card.image}
                        alt="Image"
                        width={50}
                        height={50}
                    />
                    <h1 className="text-2xl text-[#0B305B] my-7 font-montserrat font-semibold">
                        {card.title}
                    </h1>
                    <p>{card.description}</p>
                </div>
            ))}
        </motion.div>
    );
};

export default Card;
