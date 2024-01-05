import { type ResponsiveProps } from "../../types";
import Typography from "@mui/joy/Typography";

type EducationProps = ResponsiveProps;

const Education: React.FC<EducationProps> = ({ mobileLayout }) => {
	return (
		<article>
			<span className="header-extra-space">
				<Typography level="h2">Education</Typography>
			</span>
			<Typography level="h3">Iowa State University</Typography>
			<hgroup>
				<Typography level="h4">
					Computer Engineering
					{mobileLayout ? ", " : <br />}
					Bachelor of Science
				</Typography>
				<p className="supplemental-list">Philosophy, Psychology Minors</p>
			</hgroup>
			<p>United States – 2015</p>
		</article>
	);
};

export default Education;
