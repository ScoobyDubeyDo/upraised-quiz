import { useEffect, useState } from "react";
import axios from "axios";
import { QuestionBox } from "../components";

export const Question = () => {
	const [data, setData] = useState([]);

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

	return (
		<QuestionBox options={data[0]?.options} question={data[0]?.question} />
	);
};
