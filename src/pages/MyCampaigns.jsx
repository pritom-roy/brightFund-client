import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCampaigns = () => {
    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://bright-fund-server.vercel.app/myCampaigns/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setCampaigns(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching campaigns:", error);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bright-fund-server.vercel.app/campaign/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setCampaigns((prevCampaigns) =>
                                prevCampaigns.filter((campaign) => campaign._id !== id)
                            );
                        }
                    })
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="pt-10 px-4 md:px-8 bg-white mb-6">
            <h1 className="text-4xl text-Primary font-heading text-center mb-6">
                My Campaigns
            </h1>
            <p className="text-Text font-body text-center mb-8">
                Manage your campaigns here. You can update or delete them as needed.
            </p>

            <div className="hidden sm:block overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg rounded-lg">
                    <thead className="bg-Primary text-white">
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Deadline</th>
                            <th className="px-4 py-2">Actions</th>
                            <th className="px-4 py-2">Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{campaign.title}</td>
                                <td className="border px-4 py-2">{campaign.type}</td>
                                <td className="border px-4 py-2">{campaign.deadline}</td>
                                <td className="border px-4 py-2">{campaign.minDonation}</td>

                                <td className="border px-4 py-2 flex gap-2 justify-center items-center">
                                    <Link to={`/updateCampaign/${campaign._id}`}>
                                        <button
                                            className="bg-Accent text-white px-3 py-1 rounded-lg hover:bg-Secondary transition-colors"
                                        >
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(campaign._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Card View for Smaller Screens */}
            <div className="block sm:hidden">
                {campaigns.map((campaign) => (
                    <div key={campaign._id} className="mb-4 p-4 bg-white border rounded-lg shadow-md">
                        <img
                            src={campaign.photo}
                            alt={campaign.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-bold text-Primary">{campaign.title}</h3>
                        <p className="text-sm text-Text">
                            <span className="font-semibold">Type:</span> {campaign.type}
                        </p>
                        <p className="text-sm text-Text">
                            <span className="font-semibold">Deadline:</span> {campaign.deadline}
                        </p>
                        <p className="text-sm text-Text">
                            <span className="font-semibold">Minimum Donation Amount:</span> {campaign.minDonation}
                        </p>
                        <div className="mt-4 flex gap-2">
                            <Link to={`/updateCampaign/${campaign._id}`}>
                                <button
                                    className="bg-Accent text-white px-3 py-1 rounded-lg hover:bg-Secondary transition-colors"
                                >
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(campaign._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex-1"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCampaigns;
