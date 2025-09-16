import "../css/app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import NavbarLayout from "./layouts/NavbarLayout";
import SignUp from "./pages/authentication/SignUp";
import SignIn from "./pages/authentication/SignIn";
import About from "./pages/About";
import SideNavbarLayout from "./layouts/SideNavbarLayout";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/profile/Settings";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavbarLayout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
				</Route>
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route element={<SideNavbarLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/:uid/profile" element={<Profile />} />
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
