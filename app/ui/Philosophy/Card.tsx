import { phisophyCardData } from '@/app/data/philosophyCardData';
import Image from 'next/image';

const Card: React.FC = () => {
    return (
        <div className="card block md:flex gap-6">
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
        </div>
    );
};

export default Card;
