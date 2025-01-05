import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://bright-fund-server.vercel.app/donated/${user.email}`)
            .then((response) => response.json())
            .then((data) => {
                setDonations(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching donations:", error);
                setLoading(false);
            });
    }, [user.email]);

    if (loading) {
        return (<Loading />);
    }

    return (
        <div className="p-6  text-Text ">
            <h1 className="text-4xl font-heading text-center text-Primary  mb-6">
                My Donations
            </h1>
            {donations.length === 0 ? (
                <p className="text-center text-lg font-body">
                    No donations found. Make your first donation today!
                </p>
            ) : (
                <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {donations.map((donation) => (
                        <div
                            key={donation._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={donation.photo}
                                alt={donation.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-heading font-bold text-Primary ">
                                    {donation.title}
                                </h2>
                                <p className="text-sm font-body text-gray-600">
                                    {donation.type}
                                </p>
                                <p className="text-md font-body mt-2 text-gray-800">
                                    {donation.description}
                                </p>
                                <p className="text-sm font-body mt-2">
                                    <strong>Minimum Donation Amount:</strong> ${donation.minDonation}
                                </p>
                                <p className="text-sm font-body mt-2">
                                    <strong>Deadline:</strong> {donation.deadline}
                                </p>
                                <p className="text-sm font-body mt-2">
                                    <strong>Organizer Name: <br /></strong> {donation.name}
                                </p>
                                <p className="text-sm font-body mt-2">
                                    <strong>Organizer Email: <br /></strong> {donation.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyDonations;
