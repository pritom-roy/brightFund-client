import { Typewriter } from "react-simple-typewriter";
import { Zoom } from "react-awesome-reveal";
// import { Tooltip as ReactTooltip } from "react-tooltip";

const ImpactStories = () => {
    const stories = [
        {
            title: "A Warm Winter for All",
            description:
                "Thanks to your generosity, over 1,000 families received warm clothes, bringing comfort and hope during the harsh winter.",
            image: "/hand.jpg",
        },
        {
            title: "Education for the Future",
            description:
                "Your contributions helped fund education for 200 underprivileged children, creating brighter futures for them and their communities.",
            image: "/unity.jpg",
        },
        {
            title: "Healthcare Support",
            description:
                "Over 500 individuals gained access to critical healthcare services, empowering them to lead an happy and healthier lives . ",
            image: "/money.jpg",
        },
    ];

    return (
        <div className="bg-white dark:bg-DarkBackground py-16">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <h2 className="text-4xl text-Primary text-center mb-10 font-heading">
                    <Typewriter
                        words={["Impact Stories"]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={60}
                        delaySpeed={2000}
                    />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stories.map((story, index) => (
                        <Zoom key={index}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl text-Primary mb-4 font-heading">{story.title}</h3>
                                    <p className="text-sm text-Text">{story.description}</p>
                                </div>
                                {/* <div className="absolute top-0 right-0 m-4">
                                <ReactTooltip
                                    anchorId={`tooltip-${index}`}
                                    place="top"
                                    content="Click to learn more!"
                                    style={{
                                        backgroundColor: "#fff",
                                        color: "#333",
                                        borderRadius: "4px",
                                        padding: "8px",
                                    }}
                                />
                            </div> */}
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactStories;
