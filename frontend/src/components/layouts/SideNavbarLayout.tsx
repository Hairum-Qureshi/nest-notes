import { Outlet } from "react-router-dom";
import SideNavbar from "../SideNavbar";

export default function NavbarLayout() {
	return (
		<div className="flex">
			<SideNavbar />
			<div>
				<Outlet />
			</div>
		</div>
	);
}
