import info from "../../assets/about-me.json";

const AboutMe = () => {
	return (
		<article>
			<h2>{info.title}</h2>
			<p>{info.details}</p>
		</article>
	);
};

export default AboutMe;
