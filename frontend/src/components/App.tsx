import "../css/app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
// import About from "./About";
// import NotFound from "./NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				{/* <Route path="/About" element={<About />} />
					<Route path="*" element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	);
}
