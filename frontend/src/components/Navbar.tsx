import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="w-full text-white p-2 fixed my-3">
			<div className="flex justify-around">
				<Link
					to="/"
					className="[text-shadow:0_0_8px_rgba(56,189,248,0.8),0_0_16px_rgba(56,189,248,0.6),0_0_24px_rgba(56,189,248,0.4)]"
				>
					Home
				</Link>
				<Link
					to="/changelog"
					className="[text-shadow:0_0_8px_rgba(56,189,248,0.8),0_0_16px_rgba(56,189,248,0.6),0_0_24px_rgba(56,189,248,0.4)]"
				>
					Changelog
				</Link>
				<Link
					to="/subscriptions"
					className="[text-shadow:0_0_8px_rgba(56,189,248,0.8),0_0_16px_rgba(56,189,248,0.6),0_0_24px_rgba(56,189,248,0.4)]"
				>
					Subscriptions
				</Link>
				<Link
					to="/about"
					className="[text-shadow:0_0_8px_rgba(56,189,248,0.8),0_0_16px_rgba(56,189,248,0.6),0_0_24px_rgba(56,189,248,0.4)]"
				>
					About
				</Link>
				<Link
					to="/contact"
					className="[text-shadow:0_0_8px_rgba(56,189,248,0.8),0_0_16px_rgba(56,189,248,0.6),0_0_24px_rgba(56,189,248,0.4)]"
				>
					Contact
				</Link>
				<Link
					to="/sign-up"
					className="[text-shadow:0_0_8px_rgba(56,189,248,0.8),0_0_16px_rgba(56,189,248,0.6),0_0_24px_rgba(56,189,248,0.4)]"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
}
