import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-6"
    >

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Arepalli Venkata Lakshmi
        </h1>

        <h2 className="text-2xl md:text-4xl text-slate-300 font-semibold mb-6">
          Data Analytics • Data Science • AIML Student
        </h2>

        <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed mb-8 px-2">
          Aspiring Data Analyst and AIML student skilled in Power BI, Excel, SQL,
          Python, and Data Visualization, passionate about transforming complex data
          into actionable insights and building intelligent solutions for real-world
          business challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50 transition duration-300"
          >
            Download Resume
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero