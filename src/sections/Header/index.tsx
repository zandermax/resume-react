import "./Header.scss";
import Typography from "@mui/joy/Typography";

const Header = () => {
	return (
		<header>
			<hgroup>
				<Typography level="h1">Zander Maxwell</Typography>
				<Typography level="h2">
					<span className="color-accent">Front End Software Engineer</span>
				</Typography>
			</hgroup>
		</header>
	);
};

export default Header;
