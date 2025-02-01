const Copyright: React.FC = () => {
    return (
        <section className="bg-[#00152D] text-[#1F80F0] text-xs py-7">
            <div className="container mx-auto block md:flex text-center justify-between">
                <p>
                    <span className="font-bold">
                        &copy; 2023 All rights reserved.{' '}
                    </span>
                    Any Technology Pte Ltd.
                </p>
                <p className="hover:text-white cursor-pointer transition-colors mt-4 md:mt-auto">
                    Privacy Policy
                </p>
            </div>
        </section>
    );
};

export default Copyright;
