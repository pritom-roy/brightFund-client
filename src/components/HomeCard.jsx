import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const HomeCard = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await fetch("https://bright-fund-server.vercel.app/activeCampaigns");
                const data = await response.json();
                setCampaigns(data);
            } catch (error) {
                console.error("Failed to fetch campaigns:", error);
            }
        };

        fetchCampaigns();
    }, []);

    return (
        <div className="p-6 bg-Background text-Text dark:bg-DarkBackground dark:text-DarkText">
            {/* Section Header with Typewriter Effect */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-Primary dark:text-DarkPrimary">
                    <Typewriter
                        words={["Active Campaigns", "Make a Difference"]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join us in supporting these impactful initiatives.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {campaigns.length === 0 ? (
                    <Fade>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            No campaigns available at the moment.
                        </div>
                    </Fade>
                ) : (
                    campaigns.map((campaign) => (
                        <Fade key={campaign._id} duration={600}>
                            <div className="flex items-center bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4 dark:bg-DarkBackground">
                                <img
                                    src={campaign.photo || "/default-campaign.jpg"}
                                    alt={campaign.title}
                                    className="w-24 h-24 object-cover rounded-md mr-4"
                                />

                                <div className="flex-1">
                                    <h3 className="text-lg font-heading font-semibold text-Primary dark:text-DarkPrimary">
                                        {campaign.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                        {campaign.type || "No description available."}
                                    </p>
                                </div>

                                <button
                                    onClick={() => navigate(`/campaigns/${campaign._id}`)}
                                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    See More →
                                </button>
                            </div>
                        </Fade>
                    ))
                )}
            </div>
        </div>
    );
};

export default HomeCard;
