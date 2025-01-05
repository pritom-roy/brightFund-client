import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCampaigns = (sort = '') => {
        setLoading(true);
        const url = sort ? `https://bright-fund-server.vercel.app/campaign?sort=${sort}` : 'https://bright-fund-server.vercel.app/campaign';

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCampaigns(); // Fetch campaigns without sorting initially
    }, []);

    const handleSort = () => {
        fetchCampaigns('asc'); // Fetch campaigns sorted by minDonation
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="pt-2 md:pt-10 px-1 md:px-6 bg-Background">
            <h2 className="text-4xl text-Primary text-center mb-6 font-heading">
                All Campaigns
            </h2>
            <p className="text-Text text-center mb-6 font-body">
                Explore the ongoing campaigns and contribute to bring positive change.
            </p>
            <div className="flex justify-center mb-6">
                <button
                    onClick={handleSort}
                    className="px-4 py-2 bg-Accent text-white rounded-lg hover:bg-Secondary transition-colors"
                >
                    Sort by Minimum Donation (Ascending)
                </button>
            </div>

            {/* Table for larger screens */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200 shadow-md rounded-lg">
                    <thead className="bg-Primary text-white">
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Deadline</th>
                            <th className="px-4 py-2">Min. Donation</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{campaign.title}</td>
                                <td className="border px-4 py-2">{campaign.type}</td>
                                <td className="border px-4 py-2">{campaign.deadline}</td>
                                <td className="border px-4 py-2">${campaign.minDonation}</td>
                                <td className="border px-4 py-2 flex justify-center items-center">
                                    <Link
                                        to={`/campaigns/${campaign._id}`}
                                        className="text-white items-center bg-Accent px-4 py-2 rounded-lg hover:bg-Secondary transition-colors"
                                    >
                                        See More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Card view for smaller screens */}
            <div className="block sm:hidden">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign._id}
                        className="flex gap-4 bg-white border rounded-lg shadow-md mb-4 p-4"
                    >
                        <div className="">
                            <h3 className="text-lg font-bold text-Primary">{campaign.title}</h3>
                            <p className="text-sm text-Text">
                                <span className="font-semibold">Type:</span> {campaign.type}
                            </p>
                            <p className="text-sm text-Text">
                                <span className="font-semibold">Deadline:</span> {campaign.deadline}
                            </p>
                            <p className="text-sm text-Text">
                                <span className="font-semibold">Min. Donation:</span> ${campaign.minDonation}
                            </p>
                            <div className="mt-4">
                                <Link
                                    to={`/campaigns/${campaign._id}`}
                                    className="text-white bg-Accent px-4 py-2 rounded-lg hover:bg-Secondary transition-colors"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img
                                className="h-[150px] rounded-md w-full object-cover"
                                src={campaign.photo}
                                alt={campaign.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCampaigns;
