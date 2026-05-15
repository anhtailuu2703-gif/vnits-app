import ContactCTA from "../Components/ContactCTA";
import FeaturedProjects from "../Components/FeaturedProjects";
import Hero from "../Components/Hero";
import SolutionSection from "../Components/SolutionSection";

const Home = () => {
    return (
        <>
            <Hero />
            <SolutionSection />
            <FeaturedProjects />
            <ContactCTA />
        </>
    );
}

export default Home;