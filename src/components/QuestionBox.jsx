import { useState } from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Button,
	Paper,
	RingProgress as QuizNum,
	Radio,
	RadioGroup,
	Stack,
	Text,
} from "@mantine/core";

export const QuestionBox = ({
	question,
	options,
	submitAnswer,
	totalQuestionsCount = 0,
	currentQuestionCount = 0,
}) => {
	const [currentAnswer, setCurrentAnswer] = useState("");

	const stackStyleProps = {
		pt: "70px",
		p: "lg",
		align: "center",
		sx: (theme) => ({
			position: "relative",
			borderTopRightRadius: theme.radius.xl,
			borderTopLeftRadius: theme.radius.xl,
			minHeight: "calc(100vh - 6rem)",
			background: theme.white,
		}),
	};

	const quizNumStyleProps = {
		size: 100,
		thickness: 7,
		roundCaps: true,
		sections: [
			{
				value: (100 / totalQuestionsCount) * currentQuestionCount,
				color: "green",
			},
		],
	};

	return (
		<Box
			pt="6rem"
			sx={(theme) => ({
				minHeight: "100vh",
				background: theme.colors.violet[3],
			})}>
			<Stack {...stackStyleProps}>
				<Paper
					sx={{
						position: "absolute",
						top: "-50px",
					}}
					radius="50%">
					<QuizNum
						{...quizNumStyleProps}
						label={
							<Text weight={700} align="center" size="xl">
								{`${currentQuestionCount}/${totalQuestionsCount}`}
							</Text>
						}
					/>
				</Paper>
				<OptionList
					currentAnswer={currentAnswer}
					setCurrentAnswer={setCurrentAnswer}
					question={question}
					options={options}
				/>
				{totalQuestionsCount !== currentQuestionCount ? (
					<Button
						onClick={() => submitAnswer(currentAnswer)}
						styles={{
							inner: { justifyContent: "space-between" },
						}}
						leftIcon=" "
						rightIcon="&#10141;"
						size="lg">
						Next
					</Button>
				) : (
					<Button component={Link} to="/report" size="lg">
						Results
					</Button>
				)}
			</Stack>
		</Box>
	);
};

const OptionList = ({ question, options, currentAnswer, setCurrentAnswer }) => {
	const radioGroupProps = {
		sx: {
			width: "100%",
		},
		spacing: "xs",
		color: "green",
		orientation: "vertical",
	};

	const radioProps = {
		p: 28,
		sx: (theme) => ({
			background: theme.colors.gray[1],
			width: "100%",
			borderRadius: theme.radius.md,
			"& label": {
				width: "100%",
				marginLeft: "1rem",
				cursor: "pointer",
			},
		}),
	};

	return (
		<RadioGroup
			{...radioGroupProps}
			value={currentAnswer}
			onChange={setCurrentAnswer}
			label={
				<Text weight={700} size="xl" mb="sm">
					{question}
				</Text>
			}>
			{options?.map(({ text }) => (
				<Radio {...radioProps} key={text} value={text} label={text} />
			))}
		</RadioGroup>
	);
};
