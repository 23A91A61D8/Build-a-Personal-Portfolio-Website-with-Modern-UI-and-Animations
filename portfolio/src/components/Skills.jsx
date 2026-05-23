function Skills() {

  const skills = [
    "Data Analytics",
    "Data Science",
    "Artificial Intelligence",
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Power Apps",
    "Power Automate",
    "Power Pages",
    "SharePoint",
    "Snowflake",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "DSA",
    "Git",
    "GitHub",
    "Java",
    "C Programming",
    "HTML",
    "CSS",
    "Data Visualization",
    "Problem Solving",
  
  ]

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl py-8 px-4 text-center shadow-xl hover:-translate-y-2 hover:bg-slate-700 transition duration-300"
            >

              <h3 className="text-xl font-semibold text-white">
                {skill}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills