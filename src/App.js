import { Route, Routes } from "react-router-dom";
import { Home, Question } from "./screens";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/questions" element={<Question />} />
			{/* <Route path="/" element={<Home />} /> */}
		</Routes>
	);
}
export default App;
