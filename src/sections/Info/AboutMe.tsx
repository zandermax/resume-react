import info from "../../data/about-me";

const AboutMe = () => {
	return (
		<article>
			<h2>{info.title}</h2>
			<p>{info.details}</p>
		</article>
	);
};

export default AboutMe;
