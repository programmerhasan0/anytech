import Subtitle from '@/app/ui/common/Subtitle';
import Counter from '@/app/ui/Trusties/Counter';
import Banks from '@/app/ui/Trusties/Banks';
const Trusties: React.FC = () => {
    return (
        <section className="container mx-auto py-24">
            <Subtitle
                label="trusted by the best"
                className="text-center text-lg"
            />
            <Counter />
            <Banks />
        </section>
    );
};

export default Trusties;
