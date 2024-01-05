import "./Main.scss";
import Experience from "../Experience";
import Info from "../Info";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Main = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<main>
			<Sheet variant="plain">
				<Grid columns={{ md: 8, sm: 8, xs: 4 }} container spacing={{ xs: 2 }}>
					<Grid md={3} xs={8}>
						<Info mobileLayout={matches} />
					</Grid>
					<Grid md={5} xs={8}>
						<Experience mobileLayout={matches} />
					</Grid>
				</Grid>
			</Sheet>
		</main>
	);
};

export default Main;
