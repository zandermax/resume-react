import { parseText } from "../../helpers/text-parser.helper";

type PositionDetailsProps = {
	readonly descriptionText: readonly string[];
};

const PositionDetails = ({ descriptionText }: PositionDetailsProps) => {
	return (
		<>
			{descriptionText.map((text) => (
				<p key={text}>{parseText(text)}</p>
			))}
		</>
	);
};

export default PositionDetails;
