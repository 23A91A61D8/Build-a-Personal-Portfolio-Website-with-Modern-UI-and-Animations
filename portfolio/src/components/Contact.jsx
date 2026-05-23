import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >

      <div className="max-w-6xl mx-auto">

        {/* Small Heading */}
        <p className="text-cyan-400 tracking-[8px] text-base font-semibold mb-5">
          CONTACT
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
          Let’s build something amazing together.
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl mb-14">
          I’m available for internships, collaborations, and data analytics
          opportunities. Whether it’s AI, Data Science, Power BI, or frontend
          development — let’s connect and create impactful solutions together.
        </p>

        {/* Contact Details */}
        <div className="space-y-8 mb-14">

          {/* Email */}
          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xl">
              <FaEnvelope />
            </div>

            <a
              href="mailto:arepallivenkatalakshmi9@gmail.com"
              className="text-xl md:text-2xl text-white hover:text-cyan-400 transition duration-300"
            >
              arepallivenkatalakshmi9@gmail.com
            </a>

          </div>

          {/* Location */}
          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xl">
              <FaMapMarkerAlt />
            </div>

            <p className="text-xl md:text-2xl text-white">
              Nidadavole, Andhra Pradesh, India
            </p>

          </div>

          {/* Phone */}
          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xl">
              <FaPhoneAlt />
            </div>

            <p className="text-xl md:text-2xl text-white">
              +91 9849541669
            </p>

          </div>

        </div>

        {/* Social Links */}
        <div className="flex gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/23A91A61D8"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl text-white hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arepalli-venkata-lakshmi-bb8b12301/"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl text-white hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Gmail */}
          <a
            href="mailto:arepallivenkatalakshmi9@gmail.com"
            className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl text-white hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact