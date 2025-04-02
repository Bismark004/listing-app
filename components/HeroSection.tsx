const HeroSection = () => {
    const backgroundImage = "/assets/image-1.png"; // ✅ Corrected Path

    return (
        <section 
            className="bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center rounded-xl border border-red-600"
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        >
            <div className="text-center">
                <h1 className="text-white text-5xl font-bold">
                    Find your favourite place here!
                </h1>
                <h4 className="text-white text-lg">
                    The best prices for over 2 million properties worldwide
                </h4>
            </div>
        </section>
    );
};

export default HeroSection;
