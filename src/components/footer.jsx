function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`border-t py-8 px-6 md:px-24 ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
          © {currentYear} Andrew. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-6">
          {["home", "about", "projects", "contact"].map((link) => (
            <a key={link} href={`#${link}`} className={`text-sm capitalize hover:text-blue-500 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer