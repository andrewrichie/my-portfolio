function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6 md:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    c. {currentYear} Andrew. Built with React & Tailwind CSS.
                </p>
                <div className="flex gap-6">
                    <a href="#home" className="text-gray-500 hover:text-white text-sm">Home</a>
                    <a href="#about" className="text-gray-500 hover:text-white text-sm">About</a>
                    <a href="#projects" className="text-gray-500 hover:text-white text-sm">Projects</a>
                    <a href="#contact" className="text-gray-500 hover:text-white text-sm">Contact</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer