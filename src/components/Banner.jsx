import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const navigateToCampaigns = () => {
        navigate("/campaigns");
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {/* First Slide */}
                <div className="w-full h-[80vh] flex-shrink-0 bg-cover bg-center bg-hand">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4 md:px-8">
                        <h1 className="text-2xl font-heading md:text-4xl font-bold text-Secondary">
                            Empower Dreams with Every Contribution
                        </h1>
                        <p className="mt-4 font-body text-sm md:text-lg max-w-3xl">
                            Small contributions lead to big changes. Support individuals and communities as
                            they work towards brighter futures through collective effort and generosity.
                        </p>
                        <button
                            onClick={navigateToCampaigns}
                            className="mt-6 px-6 py-2 bg-Primary rounded-md text-sm md:text-base font-medium text-white"
                        >
                            Explore Campaigns
                        </button>
                    </div>
                </div>

                {/* Second Slide */}
                <div className="w-full h-[80vh] flex-shrink-0 bg-cover bg-center bg-money">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4 md:px-8">
                        <h1 className="text-2xl font-heading md:text-4xl font-bold text-Secondary">
                            Join the Movement for Change
                        </h1>
                        <p className="mt-4 font-body text-sm md:text-lg max-w-3xl">
                            Be part of a community-driven mission to fund projects that transform lives. Every
                            donation matters, and together, we can achieve remarkable results.
                        </p>
                        <button
                            onClick={navigateToCampaigns}
                            className="mt-6 px-6 py-2 bg-Primary rounded-md text-sm md:text-base font-medium text-white"
                        >
                            Start Donating
                        </button>
                    </div>
                </div>

                {/* Third Slide */}
                <div className="w-full h-[80vh] flex-shrink-0 bg-cover bg-center bg-unity">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4 md:px-8">
                        <h1 className="text-2xl font-heading md:text-4xl font-bold text-Secondary">
                            Together, We Create Impact
                        </h1>
                        <p className="mt-4 font-body text-sm md:text-lg max-w-3xl">
                            Your support powers life-changing initiatives. Join us in uniting for causes that
                            build stronger, more resilient communities.
                        </p>
                        <button
                            onClick={navigateToCampaigns}
                            className="mt-6 px-6 py-2 bg-Primary rounded-md text-sm md:text-base font-medium text-white"
                        >
                            Get Involved
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <button
                className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
};

export default Banner;
