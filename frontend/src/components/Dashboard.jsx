import { Link } from "react-router-dom";

export default function Dashboard() {
    const projects = [
        { id: 1, name: "F-Ship", stack: ["Node", "Postgres"], visible: true },
        { id: 2, name: "LinkdDev", stack: ["React", "Sequelize"], visible: true },
        { id: 3, name: "DevSync", stack: ["Next.js", "MongoDB"], visible: false },
    ];

    return (
        <div className="min-h-screen bg-[#0F172A] text-white flex font-sans">

            {/* Sidebar */}
            <aside className="w-56 bg-white/5 backdrop-blur-md border-r border-white/10 p-4 flex flex-col">
                <h1 className="text-lg font-semibold text-indigo-400 mb-6">
                    LinkdDev
                </h1>

                <nav className="flex flex-col gap-3 text-sm text-slate-300">
                    <Link to="/" className="hover:text-white">Home</Link>
                    <Link to="/projects" className="hover:text-white">Projects</Link>
                    <Link to="/analytics" className="hover:text-white">Analytics</Link>
                    <Link to="/appearance" className="hover:text-white">Appearance</Link>
                    <Link to="/settings" className="hover:text-white">Settings</Link>
                </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 p-6">

                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                    <input
                        placeholder="Search repos..."
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold">
                        U
                    </div>
                </div>

                {/* Welcome / Stats */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Welcome back, Dev 👋</h2>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                        <span className="text-emerald-400">● LIVE</span>
                        <span>Last Sync: 10m ago</span>
                        <button className="text-indigo-400 hover:underline">
                            Sync All
                        </button>
                    </div>
                </div>

                {/* Global Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                        { label: "Total Views", value: "12,430" },
                        { label: "Top Repo", value: "LinkdDev" },
                        { label: "Last Synced", value: "2 min ago" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
                        >
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                            <p className="text-lg font-semibold mt-1">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-indigo-500 transition"
                        >
                            <h3 className="font-semibold text-lg mb-2">
                                {project.name}
                            </h3>

                            {/* Stack */}
                            <div className="flex flex-wrap gap-2 mb-4 text-xs">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between text-sm">
                                <span
                                    className={`${project.visible
                                            ? "text-emerald-400"
                                            : "text-slate-500"
                                        }`}
                                >
                                    {project.visible ? "● Public" : "○ Private"}
                                </span>

                                <button className="text-indigo-400 hover:underline">
                                    Sync Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}