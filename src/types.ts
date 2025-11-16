export type ResponsiveProps = {
	mobileLayout: boolean;
};

export type ExperiencePosition = {
	description: string[];
	positionSubtitle: string;
	positionTitle: string;
	skillsList: string[];
};

type Position = {
	currentPosition?: boolean;
	description: React.ReactNode;
	positionSubtitle: string;
	positionTitle: string;
	skillsList: string[];
};

export type ExperienceEntryType = {
	company: string;
	dateEnd?: number;
	dateStart: number;
	positions: Position[];
};
