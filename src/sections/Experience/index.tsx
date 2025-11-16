import "./Experience.scss";
import { experienceData } from "../../data/experienceData";
import { type ResponsiveProps } from "../../types";
import ExperienceEntry from "./ExperienceEntry";

const NUMBER_OF_POSITIONS_BEFORE_FOLD = 3;

type ExperienceProps = ResponsiveProps;

const Experience: React.FC<ExperienceProps> = ({ mobileLayout }) => {
	const beforeTheFoldPositions = experienceData.slice(
		0,
		NUMBER_OF_POSITIONS_BEFORE_FOLD,
	);
	const afterTheFoldPositions = experienceData.slice(
		NUMBER_OF_POSITIONS_BEFORE_FOLD,
	);

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
