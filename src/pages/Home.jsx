import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import HowItWorks from "../components/HowItWorks";
import ImpactStories from "../components/ImpactStories";

const Home = () => {
    return (
        <div className="bg-Background dark:bg-DarkBackground">
            <Banner />
            <HomeCard />
            <HowItWorks />
            <ImpactStories />
        </div>
    );
};

export default Home;
