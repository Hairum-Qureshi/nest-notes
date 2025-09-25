import { Link } from "react-router-dom";

export default function SideNavbar() {
	return (
		<div className="w-1/6 h-screen bg-slate-900 relative">
			<div className="w-full p-1 text-white">
				<div className="flex flex-col p-2 space-y-4">
					<Link
						to="/"
						className="hover:cursor-pointer bg-gradient-to-l from-[#0f172b] to-[#0369A1] p-1 rounded-md"
					>
						<h2 className="text-4xl [text-shadow:0_0_8px_rgba(56,189,248,0.8),0_0_16px_rgba(56,189,248,0.6),0_0_24px_rgba(56,189,248,0.4)] hover:cursor-pointer ">
							Nest Notes
						</h2>
					</Link>
					<Link
						to="/dashboard"
						className="hover:cursor-pointer hover:bg-gradient-to-l from-[#0f172b] to-[#0369A1] p-1 hover:rounded-sm"
					>
						Dashboard
					</Link>
					<Link
						to="/my-notebooks"
						className="hover:cursor-pointer hover:bg-gradient-to-l from-[#0f172b] to-[#0369A1] p-1 hover:rounded-sm"
					>
						Notebooks
					</Link>
					<Link
						to="/tags"
						className="hover:cursor-pointer hover:bg-gradient-to-l from-[#0f172b] to-[#0369A1] p-1 hover:rounded-sm"
					>
						Tags
					</Link>
					<Link
						to="/xxx/files"
						className="hover:cursor-pointer hover:bg-gradient-to-l from-[#0f172b] to-[#0369A1] p-1 hover:rounded-sm"
					>
						Files
					</Link>
					<Link
						to="/settings"
						className="hover:cursor-pointer hover:bg-gradient-to-l from-[#0f172b] to-[#0369A1] p-1 hover:rounded-sm"
					>
						Settings
					</Link>
					<Link
						to="/xxx/profile"
						className="hover:cursor-pointer hover:bg-gradient-to-l from-[#0f172b] to-[#0369A1] p-1 hover:rounded-sm"
					>
						Profile
					</Link>
				</div>
			</div>
			<div className="text-white absolute bottom-0 w-full p-3 mb-5">
				<button className="bg-sky-600 p-1 rounded-md w-full hover:cursor-pointer hover:bg-sky-500 hover:border hover:border-sky-400">
					Upgrade Plan
				</button>
			</div>
		</div>
	);
}
