export const parseText = (text: string): JSX.Element => {
	// Wrap text that has {link address=url} and {/link} in a link element
	// Using address as the href and text as the link text
	// eslint-disable-next-line regexp/no-super-linear-backtracking
	const linkRegex = /\{link address=(.+?)\}(.+?)\{\/link\}/gu;
	const parsedText = text.split(linkRegex).map((part, index) => {
		if (index % 3 === 0) {
			// This is the text outside of the link
			return part;
		} else {
			// This is the URL, and the next part is the link text
			const url = part.trim();
			return (
				<a href={url} key={url} rel="noreferrer" target="_blank">
					{text.split(linkRegex)[index + 1].trim()}
				</a>
			);
		}
	});

	return <>{parsedText}</>;
};
