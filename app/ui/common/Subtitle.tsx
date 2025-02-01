interface Props {
    label: string;
    className?: string;
}

const Subtitle: React.FC<Props> = ({ label, className }) => {
    return (
        <h1
            className={`uppercase text-[#1f81f0] font-semibold font-montserrat tracking-wider mb-5 ${className}`}
        >
            {label}
        </h1>
    );
};

export default Subtitle;
