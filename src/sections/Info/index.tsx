import "./Info.scss";
import { type ResponsiveProps } from "../../types";
import Skills from "../Skills";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Education from "./Education";

type InfoProps = ResponsiveProps;

const Info: React.FC<InfoProps> = ({ mobileLayout }) => {
	return (
		<section className={mobileLayout ? "mobile" : ""} id="info">
			<Contact />
			<AboutMe />
			<Education mobileLayout={mobileLayout} />
			<Skills />
		</section>
	);
};

export default Info;
