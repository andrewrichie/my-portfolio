function Hero() {
    return (
        <section id="home" className="min-h-screen bg-gray-950 flex flex-col justify-center px-10 md:px-24">
            <p className="text-blue-400 font-semibold text-lg mb-3">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5">Hi, m Andrew</h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6">Frontend Developer in Training</h2>
            <p className="text-gray-500 text-lg max-w-xl mb-10">
                I build clean, modern web experiences using React
                Passionate about learning and creating things that live on the internet</p>
            <a href="#projects">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">View My work</button>        
            </a>
            <a href="#contact">
                <button className="border border-gray-600 hover:border-white text-gray-400 hover:text-white px-8 py-3 rounded-lg font-semibold">Conatact Me</button>
            </a>
        </section>
    )
}

export default Hero