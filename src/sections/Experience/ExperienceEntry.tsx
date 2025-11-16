import { type ExperienceEntryType } from "../../types";
import Typography from "@mui/joy/Typography";

const ExperienceEntry: React.FC<ExperienceEntryType> = ({
	company,
	dateEnd,
	dateStart,
	positions,
}) => {
	const dateString =
		dateStart === dateEnd
			? dateStart
			: `${dateStart} - ${dateEnd ?? "Present"}`;

	return (
		<article>
			<hgroup>
				<Typography level="h3">
					<span className="color-accent">{company}</span>
				</Typography>
				<p>{dateString}</p>
			</hgroup>
			{positions.map(
				({
					currentPosition,
					description,
					positionSubtitle,
					positionTitle,
					skillsList,
				}) => (
					<div className="employment-position" key={positionTitle}>
						<hgroup>
							<Typography level="h4">{positionTitle}</Typography>
							{currentPosition && <p>(Current position)</p>}
						</hgroup>
						<div className="employment-details">
							<hgroup>
								{positionSubtitle && <h5>{positionSubtitle}</h5>}
								<p className="supplemental-list">{skillsList.join(", ")}</p>
							</hgroup>
							{description}
						</div>
					</div>
				),
			)}
		</article>
	);
};

export default ExperienceEntry;
