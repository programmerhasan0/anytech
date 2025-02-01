import { sliderData } from '@/app/data/sliderData';

interface Props {
    goToSlide: Function;
    activeSlide: number;
}

const SliderAction: React.FC<Props> = ({ goToSlide, activeSlide }) => {
    return (
        <ul className="flex justify-around font-montserrat font-semibold text-[#1F80F0] ">
            {sliderData.map((slide, idx) => (
                <li
                    key={idx}
                    className={`cursor-pointer px-10 py-2 rounded-2xl ${activeSlide === idx && 'bg-[#B9D9FF]'}`}
                    onClick={() => goToSlide(idx)}
                >
                    {slide.btnLabel}
                </li>
            ))}
        </ul>
    );
};

export default SliderAction;
