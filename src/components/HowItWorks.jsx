import { FaBullhorn, FaShareAlt, FaHandHoldingHeart } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Zoom } from "react-awesome-reveal";

const HowItWorks = () => {
    const steps = [
        {
            title: "Start a Campaign",
            description: "Kickstart your cause by setting up a campaign with ease.",
            slogan: 'Be Kind to others',
            icon: <FaBullhorn className="text-4xl text-white" />,
        },
        {
            title: "Share Widely",
            description: "Reach out to supporters by sharing your campaign.",
            slogan: 'Grow with everyone',
            icon: <FaShareAlt className="text-4xl text-white" />,
        },
        {
            title: "Make an Impact",
            description: "Bring positive change to your community or cause.",
            slogan: 'Be the change',
            icon: <FaHandHoldingHeart className="text-4xl text-white" />,
        },
    ];

    return (
        <div className="bg-gradient-to-r from-Primary via-Accent to-Secondary py-16 dark:bg-DarkBackground">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <h2 className="text-4xl text-white text-center mb-10 font-heading dark:text-white">
                    How
                    <Typewriter
                        words={[" It Works", " To contribute"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={60}
                        delaySpeed={2000}
                    />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <Zoom key={index}>
                            <div className="relative p-6 bg-white rounded-xl shadow-lg group dark:bg-DarkBackground dark:text-white">
                                <Fade>
                                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-Primary to-Accent rounded-full mx-auto">
                                        {step.icon}
                                    </div>
                                </Fade>
                                <h3 className="text-xl text-Primary text-center mt-6 font-heading dark:text-white">
                                    {step.title}
                                </h3>
                                <p
                                    id={`tooltip-${index}`}
                                    className="text-sm text-center text-Text mt-4 font-body dark:text-white"
                                >
                                    {step.description}
                                </p>
                                <ReactTooltip
                                    anchorId={`tooltip-${index}`}
                                    place="top"
                                    content={step.slogan}
                                    style={{
                                        backgroundColor: "#fff",
                                        color: "#333",
                                        borderRadius: "4px",
                                        padding: "8px",
                                    }}
                                />
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
