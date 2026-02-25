function Projects() {
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio",
            description: "My personal portfolio built with React and Tailwind CSS",
            tech: ["React", "Tailwind", "Vite"],
            status: "In Progress"
        },
        {
            id: 2,
            title: "Weather App",
            description: "A weather application that shows real time weather data",
            tech: ["React", "API", "CSS"],
            status: "Coming Soon"
        },
        {
            id: 3,
            title: "Todo App",
            description: "A task management app with full create and delete functionality",
            tech: ["React", "useState", "CSS"],
            status: "Coming soon"
        }
    ]

    return (
        <section id="projects" className="min-h-screen bg-gray-950 flex flex-col justify-center px-6 md:px-24 py-20">
            <p className="text-blue-400 font-semibold text-lg mb-3"> what ve built</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-white font-bold text-xl">{project.title}</h3>
                            <span className="text-blue-400 text-xs border border-blue-400 px-2 py-1 rounded-full">
                                {project.status}
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {project.tech.map((t) => (
                                <span key={t} className="bg-gray-900 text-gray-300 text-xs px-3 py-1 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects