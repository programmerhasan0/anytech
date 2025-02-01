'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="block md:flex justify-around">
                <CounterDiv
                    counter={20}
                    prefix=">"
                    text="Years of Experience"
                />
                <CounterDiv
                    counter={40}
                    suffix="+"
                    text="Financial Institutions"
                />
                <CounterDiv
                    counter={200}
                    prefix=">"
                    suffix="m"
                    text="Customers Each"
                />
            </div>
        </div>
    );
};

const CounterDiv: React.FC<{
    counter: number;
    text: string;
    prefix?: string;
    suffix?: string;
}> = ({ counter, text, prefix, suffix }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="flex flex-col items-center border-b border-blue-400 border-dashed md:border-none">
            <span
                className="flex items-center font-montserrat font-medium text-5xl md:text-7xl lg:text-9xl tracking-tighter bg-gradient-to-b from-[#1A79E7] via-[#0F6BD5] to-[#0F63C5] bg-clip-text text-transparent"
                ref={ref}
            >
                {inView ? (
                    <>
                        {prefix}
                        <CountUp end={counter} />
                        {suffix}
                    </>
                ) : (
                    0
                )}
            </span>
            <p className="mt-4">{text}</p>
        </div>
    );
};

export default Counter;
