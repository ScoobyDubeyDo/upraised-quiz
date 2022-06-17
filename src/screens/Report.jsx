import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Button,
	ColorSwatch,
	Group,
	RingProgress,
	Stack,
	Text,
	Title,
	useMantineTheme,
} from "@mantine/core";
import axios from "axios";

export const Report = () => {
	const navigate = useNavigate();

	const [userPoints, setUserPoints] = useState(0);
	const theme = useMantineTheme();
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get(
					"https://62aa4505371180affbd2bdcd.mockapi.io/user"
				);
				if (res.status === 200) {
					setUserPoints(res.data[0].points);
				}
			} catch (err) {
				console.log(err.message);
			}
		})();
	}, []);

	const radioProps = {
		currect: {
			position: "left",
			p: 25,
			sx: (theme) => ({
				background: theme.colors.green[0],
				width: "100%",
				borderRadius: theme.radius.md,
			}),
		},
		incurrect: {
			position: "left",
			p: 25,
			sx: (theme) => ({
				background: theme.colors.red[1],
				width: "100%",
				borderRadius: theme.radius.md,
			}),
		},
	};

	const stackStyleProps = {
		p: "lg",
		align: "center",
		sx: (theme) => ({
			borderTopRightRadius: theme.radius.xl,
			borderTopLeftRadius: theme.radius.xl,
			minHeight: "calc(100vh - 6rem)",
			background: theme.white,
		}),
	};

	const startAgainHandler = async () => {
		await axios.put("https://62aa4505371180affbd2bdcd.mockapi.io/user/1", {
			name: "Merl",
			points: 0,
			id: "1",
		});
		navigate("/");
	};

	return (
		<Box
			pt="6rem"
			sx={(theme) => ({
				minHeight: "100vh",
				background: theme.colors.violet[3],
			})}>
			<Stack {...stackStyleProps}>
				<Title order={1}>Your result</Title>
				<RingProgress
					roundCaps
					size={200}
					thickness={18}
					sections={[
						{
							value: parseInt((userPoints / 6) * 100),
							color: "blue",
						},
					]}
					label={
						<Title weight={700} align="center">
							{parseInt((userPoints / 6) * 100)}%
						</Title>
					}
				/>
				<Group {...radioProps.currect}>
					<ColorSwatch size={20} color={theme.colors.green[6]} />
					<Text weight="bolder">{userPoints}</Text>
					<Text>Correct</Text>
				</Group>
				<Group {...radioProps.incurrect}>
					<ColorSwatch size={20} color={theme.colors.red[6]} />
					<Text weight="bolder">{6 - userPoints}</Text>
					<Text>Incorrect</Text>
				</Group>
				<Button onClick={startAgainHandler} size="lg">
					Start Again
				</Button>
			</Stack>
		</Box>
	);
};
