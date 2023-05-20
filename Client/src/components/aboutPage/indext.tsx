import { Link } from "react-router-dom";
import { AboutPagePNG, AboutbtnPNG } from "./About.styled";

const About = () => {
    return (
        <>
            <Link to="http://localhost:5173/">
                <AboutbtnPNG src="btn.svg" />
            </Link>
            <AboutPagePNG src="about_page.png" />
        </>
    );
};

export default About;
