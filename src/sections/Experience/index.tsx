import "./Experience.scss";
import experienceList from "../../assets/experience.json";
import { type ResponsiveProps } from "../../types";
import ExperienceEntry from "./ExperienceEntry";

type ExperienceProps = ResponsiveProps;

const Experience: React.FC<ExperienceProps> = ({ mobileLayout }) => {
	const beforeTheFoldPositions = experienceList.slice(0, 3);
	const afterTheFoldPositions = experienceList.slice(3);

	return (
		<section className={mobileLayout ? "mobile" : ""} id="experience">
			<h2>Work experience</h2>
			{beforeTheFoldPositions.map((experience) => (
				<ExperienceEntry
					key={`${experience.dateStart}-${experience.company}`}
					{...experience}
				/>
			))}
			<details>
				<summary>
					<div className="summary-container">
						<p>See more</p>
					</div>
				</summary>
				{afterTheFoldPositions.map((experience) => (
					<ExperienceEntry
						key={`${experience.dateStart}-${experience.company}`}
						{...experience}
					/>
				))}
			</details>
		</section>
	);
};

export default Experience;
