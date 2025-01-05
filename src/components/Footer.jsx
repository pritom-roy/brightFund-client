import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return (
        <footer className={`bg-Background text-Text py-4 md:py-10 ${location.pathname === "/home" ? "dark:bg-DarkBackground dark:text-DarkText" : ""}`}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12">
                {/* Logo and About Section */}
                <div>
                    <h1 className="text-2xl font-bold text-Primary font-heading">BrightFund</h1>
                    <p className="mt-4 text-sm font-body">
                        BrightFund is a platform where ideas come to life. Join us in supporting creative projects, personal causes, and startups around the world.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="md:mx-auto">
                    <h2 className="text-xl font-semibold text-Secondary font-heading">Quick Links</h2>
                    <ul className="mt-4 space-y-2">
                        <li><Link to="/home" className="hover:text-Primary font-body">Home</Link></li>
                        <li><Link to="/campaigns" className="hover:text-Primary font-body">All Campaigns</Link></li>
                        <li><Link to="/addCampaign" className="hover:text-Primary font-body">Add New Campaign</Link></li>
                        <li><Link to="/myCampaign" className="hover:text-Primary font-body">My Campaigns</Link></li>
                        <li><Link to="/myDonations" className="hover:text-Primary font-body">My Donations</Link></li>
                    </ul>
                </div>

                {/* Contact and Social Media */}
                <div>
                    <h2 className="text-xl font-semibold text-Accent font-heading">Stay Connected</h2>
                    <p className="mt-4 text-sm font-body">Follow us on social media and stay updated with the latest campaigns.</p>

                    <div className="flex space-x-4 p-2 rounded-2xl md:mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl text-blue-700 hover:text-blue-800" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl text-blue-700 hover:text-blue-800" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-2xl text-red-700 hover:text-red-800" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center border-t border-Text pt-5">
                <p className="text-sm font-body">&copy; 2024 BrightFund. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
