function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-lg border-b border-white/10 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
          Arepalli Venkata Lakshmi
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-xl font-semibold">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar