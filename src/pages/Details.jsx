import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Details = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
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

    const { name, email, photo, minDonation, title, type, description, deadline } = data;

    const handleDonation = () => {
        const currentDate = new Date();
        const deadline = new Date(data.deadline.split('/').reverse().join('-'));

        if (currentDate > deadline) {
            Toast.fire({
                icon: "error",
                title: "Deadline Passed",
            });
            return;
        }

        const donationData = {
            ...data,
            donatorName: user.displayName,
            donatorEmail: user.email,
        };


        fetch('https://bright-fund-server.vercel.app/donated', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donationData),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.insertedId) {
                    Toast.fire({
                        icon: "success",
                        title: "Donation Successful",
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "Donation unsuccessful",
                    });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while processing your donation.");
            });
    };

    return (
        <div>
            <h2 className="text-4xl text-Primary text-center mt-2 font-heading">
                Details
            </h2>
            <div className="p-6 dark:bg-DarkBackground text-Text dark:text-DarkText">
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="relative h-60 md:h-80">
                        <img
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <h1 className="text-3xl font-heading font-bold mb-4">{title}</h1>
                        <p className="text-lg font-body mb-4">{description}</p>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Organizer:</h2>
                            <p className="font-body">{name}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Email:</h2>
                            <p className="font-body text-Primary dark:text-DarkPrimary">
                                {email}
                            </p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Type:</h2>
                            <p className="font-body">{type}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Minimum Donation:</h2>
                            <p className="font-body">{`$${minDonation}`}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Deadline:</h2>
                            <p className="font-body">{deadline}</p>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={handleDonation}
                                className="px-6 py-2 bg-Primary dark:bg-DarkPrimary text-white font-body rounded-lg shadow hover:bg-opacity-90">
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
