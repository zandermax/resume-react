import Skills from '../Skills';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Education from './Education';

import './Info.scss';

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
