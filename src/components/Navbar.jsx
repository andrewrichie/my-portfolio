import { useState } from "react"


function Navbar({name}) {
    const [isOpen, setIsOPen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">

        <div className="flex justify-between items-center px-6 py-4 md:px-16">
            <h2 className="text-white font-bold text-xl">{name}'s Portfolio</h2>

            <ul className="hidden md:flex gap-8 list-none">
                <li><a href="#home" className="text-gray-400 hover:text-white ">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white ">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white ">projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white ">contacts</a></li>
            </ul>

                {/*  only visible on mobile*/}
                <button
                    className="md:hidden text-white text-3xl focus:outline-none"
                    onClick={() => setIsOPen(!isOpen)}
                >
                    {isOpen ? 'x' : '='}
                </button>
        </div>
        {/* MObile drop down */}
        {isOpen && (
            <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4">
                <ul className="flex flex-col gap-4 list-none">
                    <li><a href="#home" onClick={() => setIsOPen(false)} className="text-gray-400 hover:text-white text-lg">Home</a></li>
                    <li><a href="#about" onClick={() => setIsOPen(false)} className="text-gray-400 hover:text-white text-lg">About</a></li>
                    <li><a href="#projects" onClick={() => setIsOPen(false)} className="text-gray-400 hover:text-white text-lg">Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOPen(false)} className="text-gray-400 hover:text-white text-lg">Contacts</a></li>
                </ul>
            </div>
        )}

        </nav>
    )
}

export default Navbar