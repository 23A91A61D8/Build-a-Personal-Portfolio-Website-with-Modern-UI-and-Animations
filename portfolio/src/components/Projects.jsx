function Projects() {

  const projects = [

    {
      title: "Offline Customer Support Chatbot",
      description:
        "An AI-powered offline customer support chatbot built using Ollama and Llama 3.2 for intelligent query handling and local AI interactions.",
      tech: "Ollama • Llama 3.2 • Python • AI Chatbot",
      github:
        "https://github.com/23A91A61D8/Build-an-Offline-Customer-Support-Chatbot-with-Ollama-and-Llama-3.2",
    },

    {
      title: "Movie Recommendation Engine",
      description:
        "A personalized movie recommendation system developed using Surprise and Scikit-learn to provide intelligent movie suggestions based on user preferences.",
      tech: "Python • Scikit-learn • Surprise • Machine Learning",
      github:
        "https://github.com/23A91A61D8/Build-a-Movie-Recommendation-Engine-with-Surprise-and-Scikit-learn",
    },

    {
      title: "Customer Feedback Sentiment Analysis",
      description:
        "A smart customer feedback analysis system that uses AI sentiment analysis to understand customer opinions and generate meaningful business insights through interactive dashboards.",
      tech: "Excel • SharePoint • Power Automate • AI Sentiment Analysis • Dashboard",
      github:
        "https://github.com/23A91A61D8/Internship_Project",
    }

  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-20">
          My Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:bg-slate-700 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-6">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech */}
              <p className="text-cyan-400 font-semibold mb-8">
                {project.tech}
              </p>

              {/* Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                View Project
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects