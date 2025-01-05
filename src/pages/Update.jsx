import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const campaign = useLoaderData(); // Load data using useLoaderData

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const minDonation = event.target.minDonation.value;
        const title = event.target.title.value;
        const type = event.target.type.value;
        const description = event.target.description.value;
        const deadline = new Date(event.target.deadline.value)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "/");

        const updatedCampaign = {
            name,
            email,
            photo,
            minDonation,
            title,
            type,
            description,
            deadline,
        };

        fetch(`https://bright-fund-server.vercel.app/updateCampaign/${campaign._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Toast.fire({
                        icon: "success",
                        title: "Campaign Updated Successfully",
                    });
                    navigate('/myCampaign')
                }
            });

        console.log(updatedCampaign);
    };

    return (
        <div className="bg-Background dark:bg-DarkBackground p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-2">
            <h1 className="text-3xl font-heading text-Primary dark:text-Accent text-center mb-4">
                Update Campaign
            </h1>
            <p className="text-sm text-Text dark:text-DarkText text-center mb-8">
                Modify your campaign details below to keep your audience updated.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={campaign.name}
                            readOnly
                            className="w-full p-2 border rounded-md bg-gray-100 text-sm dark:bg-DarkCard dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={campaign.email}
                            readOnly
                            className="w-full p-2 border rounded-md bg-gray-100 text-sm dark:bg-DarkCard dark:text-white"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={campaign.photo}
                            required
                            className="w-full p-2 border rounded-md text-sm dark:bg-DarkCard dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Minimum Donation Amount
                        </label>
                        <input
                            type="number"
                            name="minDonation"
                            defaultValue={campaign.minDonation}
                            required
                            className="w-full p-2 border rounded-md text-sm dark:bg-DarkCard dark:text-white"
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Campaign Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={campaign.title}
                            required
                            className="w-full p-2 border rounded-md text-sm dark:bg-DarkCard dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Campaign Type
                        </label>
                        <select
                            name="type"
                            defaultValue={campaign.type}
                            required
                            className="w-full p-2 border rounded-md text-sm dark:bg-DarkCard dark:text-white"
                        >
                            <option value="Personal Issue">Personal Issue</option>
                            <option value="Startup">Startup</option>
                            <option value="Business">Business</option>
                            <option value="Creative Idea">Creative Idea</option>
                        </select>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            defaultValue={campaign.description}
                            rows="4"
                            required
                            className="w-full p-2 border rounded-md text-sm dark:bg-DarkCard dark:text-white"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-body text-Text dark:text-DarkText mb-1">
                            Deadline
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            defaultValue={(() => {
                                const [day, month, year] = campaign.deadline.split("/");
                                return `${year}-${month}-${day}`;
                            })()}
                            required
                            className="w-full p-2 border rounded-md text-sm dark:bg-DarkCard dark:text-white"
                        />

                    </div>
                </div>

                {/* Row 5 */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-Primary text-white font-body rounded-md hover:bg-Accent transition dark:bg-DarkAccent"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;
