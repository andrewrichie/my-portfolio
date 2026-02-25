function About() {
    const info = {
        name: "Andrew",
        age: "26",
        location: "Nigeria",
        experience: "Beginner",
        goal: "to become a professional Frontend Developer"
    }

    const { name, age, location, experience, goal } = info

    const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"]
    
    return (
        <section id="about" className="min-h-screen bg-gray-900 flex flex-col justify-center px-6 md:px-24 py-20">
            <p className="text-blue-400 font-semibold text-base md:text-lg mb-3">Get to know me</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">About me</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        Hi! m {name}, a passionate developer based in {location},
                        I started my coding journey fully and i am fully committed to
                        growing into a professional frontend developer.
                    </p>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4">
                        My goal is {goal}.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-white font-bold text-lg md:text-xl mb-4">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span key={skill} className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-gray-800 rounded-lg p-4 md:p-5">
                        <p className="text-gray-500 text-sm">Age</p>
                        <p className="text-white font-semibold text-base md:text-lg">{age}</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 md:p-5">
                        <p className="text-gray-500 text-sm">Location</p>
                        <p className="text-white font-semibold text-base md:text-lg">{location}</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 md:p-5">
                        <p className="text-gray-500 text-sm">Experience Level</p>
                        <p className="text-white font-semibold text-base md:text-lg">{experience}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About