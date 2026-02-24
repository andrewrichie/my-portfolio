function Navbar({name}) {
    return (
        <nav className="flex justify-between items-center px-10 py-5 bg-gray-900 border-b border-grey-800 sticky top-0 z-50">
            <h2 className="text-white font-bold text-xl">{name}'s Portfolio</h2>
            <ul className="flex gap-8 list-none">
                <li><a href="#home" className="text-gray-400 hover:text-white cursor-pointer">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white cursor-pointer">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">contacts</a></li>
            </ul>
        </nav>
    )
}

export default Navbar