import "../css/app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import NavbarLayout from "./layouts/NavbarLayout";
import SignUp from "./pages/authentication/SignUp";
import SignIn from "./pages/authentication/SignIn";
import About from "./pages/About";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavbarLayout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/about" element={<About />} />
				</Route>
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}
