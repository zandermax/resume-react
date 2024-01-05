// TODO create schema for JSON files
type PositionInfo = {
	currentPosition: boolean;
	description: string[];
	positionSubtitle?: string;
	positionTitle: string;
	skillsList: string[];
};

type ExperienceEntryProps = {
	company: string;
	dateEnd?: number;
	dateStart: number;
	positions: PositionInfo[];
};

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
	company,
	dateEnd,
	dateStart,
	positions,
}) => {
	return (
		<article>
			<hgroup>
				<h3 className="color-accent">{company}</h3>
				<p>
					{dateStart} - {dateEnd ?? "Present"}
				</p>
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
							<h4>{positionTitle}</h4>
							{currentPosition && <p>(Current position)</p>}
						</hgroup>
						<div className="employment-details">
							<hgroup>
								{positionSubtitle && <h5>{positionSubtitle}</h5>}
								<p className="supplemental-list">{skillsList.join(", ")}</p>
							</hgroup>
							{description.map((descriptionEntry) => (
								<p key={descriptionEntry}>{descriptionEntry}</p>
							))}
						</div>
					</div>
				),
			)}
		</article>
	);
};

export default ExperienceEntry;
