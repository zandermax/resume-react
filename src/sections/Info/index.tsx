import "./Info.scss";
import Skills from "../Skills";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";

const Info = () => {
	return (
		<section id="info">
			<Contact />
			<AboutMe />
			<Education />
			<Skills />
		</section>
	);
};

export default Info;
