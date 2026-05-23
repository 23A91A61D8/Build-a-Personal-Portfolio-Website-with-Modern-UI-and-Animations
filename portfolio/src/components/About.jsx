function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
          About Me
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Box */}
          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-3xl bg-slate-800 flex items-center justify-center shadow-2xl">

              <h1 className="text-7xl font-bold text-cyan-400">
                VL
              </h1>

            </div>

          </div>

          {/* Right Content */}
          <div className="space-y-8 text-slate-300 text-xl leading-relaxed">

            <p>
              I am an AIML student with a strong passion for
              Data Analytics, Data Science, Artificial Intelligence,
              and emerging technologies.
            </p>

            <p>
              Skilled in Power BI, Excel, SQL, Python, and Data Visualization,
              I enjoy transforming complex datasets into actionable insights
              that support smart business decisions.
            </p>

            <p>
              I am passionate about solving real-world challenges using
              AI-driven solutions, analytics tools, and intelligent systems
              while continuously enhancing my technical, analytical,
              and problem-solving abilities.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About