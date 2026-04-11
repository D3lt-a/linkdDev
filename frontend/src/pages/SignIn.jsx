import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyUser } from "../services/api";

export default function SignIn() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [focused, setFocused] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sign in payload:", form);
        try {
            await verifyUser(form.email, form.password);
            setForm({ email: "", password: "" });
            navigate("/dashboard");
        } catch (error) {
            alert("An error occurred during sign-in. Please try again.");
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden font-mono">

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Radial glow */}
            <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
            />

            {/* Card */}
            <div className="relative z-10 w-full max-w-105 bg-[#0F172A]/85 border border-[#1E293B] rounded-2xl px-8 py-10 backdrop-blur-xl">

                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="bg-indigo-500 text-white text-sm font-bold px-2 py-1 rounded-md">&lt;/&gt;</span>
                    <span className="text-slate-100 text-lg font-semibold tracking-tight font-sans">LinkdDev</span>
                </div>

                <p className="text-emerald-400 text-xs mb-1 opacity-80">~ $ authenticate --user</p>
                <h1 className="text-slate-100 text-2xl font-bold tracking-tight mb-1 font-sans">Welcome back</h1>
                <p className="text-slate-500 text-sm mb-7 font-sans">Sign in to your control center</p>

                {/* GitHub Button */}
                <button
                    onClick={() => console.log("GitHub OAuth")}
                    className="w-full flex items-center justify-center gap-3 bg-[#161B22] text-slate-100 border border-[#30363D] rounded-lg py-3 text-sm font-medium font-sans hover:border-slate-500 transition-colors duration-200 cursor-pointer"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Continue with GitHub
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <span className="flex-1 h-px bg-[#1E293B]" />
                    <span className="text-[#334155] text-[11px] whitespace-nowrap">or use credentials</span>
                    <span className="flex-1 h-px bg-[#1E293B]" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {[
                        { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                        { name: "password", label: "Password", type: "password", placeholder: "••••••••" },
                    ].map((field) => (
                        <div key={field.name} className="flex flex-col gap-1.5">
                            <label className="text-slate-400 text-xs tracking-wide">{field.label}</label>
                            <input
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={form[field.name]}
                                onChange={handleChange}
                                onFocus={() => setFocused(field.name)}
                                onBlur={() => setFocused(null)}
                                className={`bg-[#0B1120] border rounded-lg px-4 py-2.5 text-slate-100 text-sm outline-none w-full transition-all duration-200 placeholder:text-slate-600
                    ${focused === field.name
                                        ? "border-indigo-500 shadow-[0_0_0_3px_rgba(99,102,241,0.15)]"
                                        : "border-[#1E293B] hover:border-slate-600"}`}
                            />
                        </div>
                    ))}

                    <div className="flex justify-end -mt-2">
                        <Link to="/forgot" className="text-indigo-400 text-xs hover:text-indigo-300 transition-colors">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] text-white rounded-lg py-3 text-sm font-semibold font-sans flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-1"
                    >
                        Sign In <span className="text-base">→</span>
                    </button>
                </form>

                <p className="text-center text-slate-500 text-sm mt-6 font-sans">
                    No account?{" "}
                    <Link to="/signup" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                        Create one
                    </Link>
                </p>
            </div>

            <p className="relative z-10 mt-8 text-[#334155] text-xs flex items-center gap-2">
                <span className="text-emerald-400">●</span> Secure · Encrypted · Open Source
            </p>
        </div>
    );
}