import { Link } from "react-router-dom";
import radialGradient from "../../../assets/blue-black-radial-gradient.jpeg";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function SignIn() {
	return (
		<div className="flex flex-col lg:flex-row min-h-screen bg-black">
			{/* FORM SECTION */}
			<div className="p-4 w-full lg:w-1/2 lg:flex lg:items-center lg:justify-center">
				<div className="w-full max-w-md mx-auto">
					<h1 className="text-3xl text-center mb-3 text-slate-200 font-semibold">
						Sign In to Your Account
					</h1>

					<div className="text-slate-100 text-center text-sm mb-3">
						<p>
							Don't have an account? Sign up{" "}
							<Link to="/sign-up" className="text-sky-500 hover:underline">
								here
							</Link>
							.
						</p>
					</div>

					<form className="flex flex-col gap-3 text-white">
						{/* Social buttons */}
						<div className="flex flex-col sm:flex-row sm:space-x-2 gap-2">
							<button
								type="button"
								className="w-full px-2 py-2 border border-slate-700 rounded-md"
							>
								<FaGoogle className="inline mr-2" /> Google
							</button>
							<button
								type="button"
								className="w-full px-2 py-2 border border-slate-700 rounded-md"
							>
								<FaApple className="inline mr-2" /> Apple
							</button>
						</div>

						{/* Divider */}
						<div className="relative flex py-1 items-center">
							<div className="flex-grow border-t border-slate-600"></div>
							<span className="flex-shrink mx-2 text-slate-600">or</span>
							<div className="flex-grow border-t border-slate-600"></div>
						</div>

						{/* Email */}
						<div className="w-full flex flex-col">
							<label htmlFor="email" className="text-sm text-slate-500">
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="Email"
								className="w-full text-base p-1.5 rounded-md bg-slate-900 border border-slate-700 focus:border-sky-800 outline-none"
							/>
						</div>

						{/* Password */}
						<div className="w-full flex flex-col">
							<label htmlFor="password" className="text-sm text-slate-500">
								Password
							</label>
							<input
								id="password"
								type="password"
								placeholder="Password"
								className="w-full text-base p-1.5 rounded-md bg-slate-900 border border-slate-700 focus:border-sky-800 outline-none"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-sky-600 hover:bg-sky-500 text-white text-lg font-medium py-2 rounded-md mt-2"
						>
							Sign In
						</button>
					</form>
				</div>
			</div>

			{/* IMAGE SECTION */}
			<div className="lg:w-1/2">
				<img
					src={radialGradient}
					alt="Auth page background"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
