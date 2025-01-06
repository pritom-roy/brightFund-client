import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    // Check dark mode from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(savedMode);
        if (savedMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        localStorage.setItem("darkMode", !darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    // Logout user
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully");
            })
            .catch(error => {
                console.log("Error during log out:", error.message);
            });
    };


    return (
        <div className={`bg-Background shadow-sm ${location.pathname === "/home" ? "dark:bg-DarkBackground" : ""}`}>
            <div className="navbar text-Text font-body w-11/12 mx-auto">
                <div className="navbar-start">
                    {/* Mobile dropdown menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn pl-0 btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-Primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-Background rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/home" className="hover:text-Accent">Home</NavLink></li>
                            <li><NavLink to="/campaigns" className="hover:text-Accent">All Campaigns</NavLink></li>
                            <li><NavLink to="/addCampaign" className={`hover:text-Accent ${user?.email ? '' : 'hidden'}`}>Add New Campaign</NavLink></li>
                            <li><NavLink to="/myCampaign" className={`hover:text-Accent ${user?.email ? '' : 'hidden'}`}>My Campaign</NavLink></li>
                            <li><NavLink to="/myDonations" className={`hover:text-Accent ${user?.email ? '' : 'hidden'}`}>My Donations</NavLink></li>
                            <li><NavLink to="/login" className="hover:text-Accent">Login</NavLink></li>
                            <li><NavLink to="/register" className="hover:text-Accent">Register</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="text-xl font-heading font-bold text-Primary">
                        BrightFund
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <li><NavLink to="/home" className={`hover:text-Accent ${location.pathname === "/home" ? "dark:text-white" : ""}`}>Home</NavLink></li>
                        <li><NavLink to="/campaigns" className={`hover:text-Accent ${location.pathname === "/home" ? "dark:text-white" : ""}`}>All Campaigns</NavLink></li>
                        <li><NavLink to="/addCampaign" className={`hover:text-Accent ${location.pathname === "/home" ? "dark:text-white" : ""} ${user?.email ? '' : 'hidden'}`}>Add New Campaign</NavLink></li>
                        <li><NavLink to="/myCampaign" className={`hover:text-Accent ${location.pathname === "/home" ? "dark:text-white" : ""} ${user?.email ? '' : 'hidden'}`}>My Campaign</NavLink></li>
                        <li><NavLink to="/myDonations" className={`hover:text-Accent ${location.pathname === "/home" ? "dark:text-white" : ""} ${user?.email ? '' : 'hidden'}`}>My Donations</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    {
                        user ?
                            <div className="relative group flex flex-col items-center justify-center">
                                <img
                                    className="w-12 h-12 rounded-full object-cover"
                                    src={user.photoURL}
                                    alt="User"
                                />
                                <div className="absolute font-bold z-20 bg-white w-auto left-1/2 transform -translate-x-1/2 top-full opacity-0 group-hover:opacity-100 p-2 mt-2 rounded-lg bg-opacity-80 text-white transition-opacity">
                                    <p className="text-Text">{user.displayName}</p>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-Secondary text-white py-1 px-4 rounded hover:bg-Secondary/80 mt-1"
                                    >
                                        Log out
                                    </button>
                                </div>
                            </div>
                            :
                            <div className="hidden md:block">
                                <div className="flex gap-2">
                                    <Link
                                        to="/login"
                                        className="btn border-Primary text-Primary hover:bg-Primary hover:text-Background"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="btn bg-Accent text-Background hover:bg-green-700 hover:text-white"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                    }
                    {location.pathname === "/home" && (
                        <button
                            onClick={toggleDarkMode}
                            className="px-4 md:pl-2 text-white rounded"
                        >
                            {darkMode ? <IoMdSunny className="text-Secondary text-2xl" /> : <BsFillMoonStarsFill className="bg-black text-2xl rounded-full px-2" />}
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
