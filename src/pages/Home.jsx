import { useEffect } from "react";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/UI/HeroSection";
import About from "./About";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <About />

            {/* Contact Section Start */}
            <ContactSection />
            {/* Contact Section End */}
        </div>
    );
};

export default Home;
