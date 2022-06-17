import { Route, Routes } from "react-router-dom";
import { Home, Question, Report } from "./screens";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/questions" element={<Question />} />
			<Route path="/report" element={<Report />} />
		</Routes>
	);
}
export default App;
