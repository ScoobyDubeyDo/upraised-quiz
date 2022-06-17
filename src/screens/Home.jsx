import { Link } from "react-router-dom";
import {
	Button,
	Center,
	Paper,
	Stack,
	Text,
	Title,
	useMantineTheme,
} from "@mantine/core";

export const Home = () => {
	const theme = useMantineTheme();
	return (
		<Stack
			p={35}
			sx={{
				minHeight: "100vh",
				background: theme.fn.linearGradient(
					180,
					theme.colors.gray[0],
					theme.colors.violet[4]
				),
			}}
			align="center"
			justify="space-between">
			<Text sx={{ fontSize: "25px" }} weight="bolder">
				Avengers
			</Text>
			<Center
				component={Paper}
				shadow="xs"
				radius="50%"
				p={60}
				sx={{ aspectRatio: "1" }}>
				<Title
					component={Text}
					variant="gradient"
					gradient={{ from: "red", to: "red" }}
					order={1}
					align="center">
					Quiz
				</Title>
			</Center>
			<Button component={Link} to="/questions" size="xl">
				Start
			</Button>
		</Stack>
	);
};
