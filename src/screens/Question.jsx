import { useEffect, useState } from "react";
import axios from "axios";
import { QuestionBox } from "../components";

export const Question = () => {
	const [data, setData] = useState([]);
	const [currentQue, setCurrentQue] = useState(0);
	const [currPoints, setPoints] = useState(0);

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get(
					"https://62aa4505371180affbd2bdcd.mockapi.io/data"
				);
				if (res.status === 200) {
					setData(res.data);
				}
			} catch (err) {
				console.log(err.message);
			}
		})();
	}, []);

	const submitAnswer = (answer) => {
		let userData = { name: "Merl", points: currPoints, id: "1" };

		if (!!answer) {
			data[currentQue].options.forEach(async (option) => {
				if (option.text === answer && option.isRight) {
					console.log("+1");
					await axios.put(
						"https://62aa4505371180affbd2bdcd.mockapi.io/user/1",
						{ ...userData, points: currPoints + 1 }
					);
					setPoints((prev) => prev + 1);
				}
			});
			setCurrentQue((prev) => prev + 1);
		}
	};

	return (
		<QuestionBox
			totalQuestionsCount={data.length}
			currentQuestionCount={currentQue + 1}
			options={data[currentQue]?.options}
			question={data[currentQue]?.question}
			submitAnswer={submitAnswer}
		/>
	);
};
