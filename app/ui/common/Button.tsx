import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
    label: string;
    type: 'orange' | 'transparent';
}

const Button: React.FC<Props> = ({ label, type }) => {
    return (
        <button
            className={`flex items-center transition-all gap-1 px-4 py-2 ${type === 'orange' ? 'bg-[#FE8B53] hover:gap-3  transition-[gap] duration-300' : 'bg-transparent border-2 border-white hover:bg-white hover:text-[#1f81f0]'} rounded-sm group`}
        >
            <span
                className={`${type === 'orange' && 'group-hover:ml-2 transition-all duration-300'}`}
            >
                {label}
            </span>{' '}
            <MdKeyboardArrowRight />
        </button>
    );
};

export default Button;
