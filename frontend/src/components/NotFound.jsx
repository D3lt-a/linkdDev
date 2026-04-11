import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    const [typed, setTyped] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const message = "Error: route not found in filesystem";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < message.length) {
                setTyped(message.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 40);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const blink = setInterval(() => setShowCursor((p) => !p), 530);
        return () => clearInterval(blink);
    }, []);

    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4 py-8 font-mono relative overflow-hidden text-white">

            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />

            {/* Glow */}
            <div className="absolute top-1/5 left-1/2 -translate-x-1/2 w-175 h-100 pointer-events-none bg-[radial-gradient(ellipse,rgba(239,68,68,0.07)_0%,transparent_70%)]" />

            <div className="w-full max-w-140 relative z-10">

                {/* Terminal bar */}
                <div className="bg-slate-800 border-b border-[#0F172A] rounded-t-xl px-4 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-slate-500 text-xs ml-auto mr-auto -translate-x-4.5">
                        linkddev — bash
                    </span>
                </div>

                {/* Terminal */}
                <div className="bg-[#0B1120] border border-slate-800 border-t-0 rounded-b-xl p-6 mb-8">

                    <p className="text-sm mb-2">
                        <span className="text-emerald-500">user@linkddev</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-indigo-500">~/dashboard</span>
                        <span className="text-white"> $</span>
                        <span className="text-slate-400"> cd {window.location.pathname}</span>
                    </p>

                    <p className="flex items-center text-sm mb-4">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-rose-300 ml-2">{typed}</span>
                        <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-indigo-500 ml-1`}>▋</span>
                    </p>

                    {/* Code block */}
                    <div className="bg-[#0F172A] border border-slate-800 rounded-md p-3 mb-4 text-xs space-y-1">
                        <p className="flex gap-4">
                            <span className="text-slate-700 w-4">1</span>
                            <span className="text-indigo-500">STATUS</span>
                            <span className="text-slate-400">404</span>
                        </p>
                        <p className="flex gap-4">
                            <span className="text-slate-700 w-4">2</span>
                            <span className="text-indigo-500">PATH</span>
                            <span className="text-red-500">{window.location.pathname}</span>
                        </p>
                        <p className="flex gap-4">
                            <span className="text-slate-700 w-4">3</span>
                            <span className="text-indigo-500">HINT</span>
                            <span className="text-slate-400">Route does not exist on this server</span>
                        </p>
                    </div>

                    <p className="text-sm">
                        <span className="text-emerald-500">user@linkddev</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-indigo-500">~/dashboard</span>
                        <span className="text-white"> $</span>
                        <span className="text-slate-500"> _</span>
                    </p>
                </div>

                {/* 404 */}
                <div className="text-center text-[80px] font-extrabold text-[#0F172A] tracking-widest leading-none mb-4 select-none">
                    404
                </div>

                <p className="text-center text-slate-500 text-sm mb-6">
                    This page doesn't exist in the codebase.
                </p>

                {/* Actions */}
                <div className="flex gap-3 justify-center mb-6">
                    <Link
                        to="/"
                        className="bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-semibold"
                    >
                        ← Back to Home
                    </Link>
                    <Link
                        to="/signin"
                        className="border border-slate-800 text-slate-500 px-5 py-2 rounded-lg text-sm"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Suggestions */}
                <div className="flex flex-col items-center gap-2">
                    <p className="text-slate-700 text-xs"># maybe you meant:</p>
                    {[
                        { path: "/", label: "/signin" },
                        { path: "/signup", label: "/signup" },
                        { path: "/dashboard", label: "/dashboard" },
                    ].map((s) => (
                        <Link
                            key={s.path}
                            to={s.path}
                            className="flex items-center gap-2 text-indigo-500 text-sm opacity-80"
                        >
                            <span className="text-slate-700">→</span> {s.label}
                        </Link>
                    ))}
                </div>

            </div>

            {/* Footer */}
            <p className="mt-12 text-slate-700 text-xs flex items-center gap-2 z-10">
                <span className="text-emerald-500">●</span> LinkdDev · All systems operational
            </p>
        </div>
    );
}