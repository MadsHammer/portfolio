import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-indigo-600 text-white pt-32 pb-10  mx-auto px-6"
    >
      <div className=" custom-max-width mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT SIDE: BIO */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-bold text-indigo-200">ABOUT.</span>
              <div className="flex justify-end w-24 border-t-4 border-dotted border-indigo-200 h-0 "></div>{" "}
            </div>

            <h2 className="text-3xl lg:text-5xl font-light mb-8 tracking-tighter uppercase">
              Just who is{" "}
              <span className=" font-black text-5xl lg:text-8xl">
                <br></br>Mads Hammer?
              </span>
            </h2>

            <div className="space-y-6 text-lg text-indigo-50 leading-relaxed">
              <p className=" leading-relaxed">
                I'm a straightforward guy who loves diving into deep tech rabbit
                holes. I'd like to see myself as positive and outgoing, trying
                to greet everyone with a smile. I'm both humble and have to
                admit to myself daily that I have a lot more to learn, I only
                need an internet connection and a PC and you'll find me plugging
                in to find the answers. There’s no better feeling than that
                <span className="relative inline-block px-2 group">
                  <span
                    className="relative z-10 inline-block font-black italic text-indigo-400 
                   transform -skew-x-12 scale-110 transition-transform duration-300 
                   group-hover:scale-175 group-hover:-rotate-5 cursor-default"
                  >
                    "Oomph"
                  </span>
                </span>
                when GitHub finally deploys the app and everything just clicks.
              </p>
              <p className="font-medium">
                When I'm not arguing with an AI about which code is cleaner or
                pixel-pushing a layout, you’ll find me:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">🏃‍♂️</span>
                  <span className="text-sm font-medium uppercase tracking-wide">
                    Running
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">🎮</span>
                  <span className="text-sm font-medium uppercase tracking-wide">
                    Gaming (Comp & Casual)
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">🍷</span>
                  <span className="text-sm font-medium uppercase tracking-wide">
                    Friday night wine
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">🤝</span>
                  <span className="text-sm font-medium uppercase tracking-wide">
                    Friends & Family
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT & SOCIALS */}
          <div className="flex flex-col justify-end">
            <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">
              Reach out to me or have a look
            </h3>

            <div className="space-y-4">
              {/* EMAIL - White Glass Effect */}
              <a
                href="mailto:madshammer@hotmail.com"
                className="group flex items-center justify-between p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:bg-indigo-100">
                    <Mail className="w-6 h-6 text-white group-hover:text-indigo-600" />
                  </div>
                  <span className="text-lg font-bold text-white group-hover:text-indigo-900 transition-colors">
                    Email
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-indigo-300 group-hover:text-indigo-600 transition-all" />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/MadsHammer"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:bg-gray-100">
                    <Github className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                  <span className="text-lg font-bold text-white group-hover:text-black transition-colors">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-indigo-300 group-hover:text-black transition-all" />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:bg-blue-50">
                    <Linkedin className="w-6 h-6 text-white group-hover:text-[#0077B5]" />
                  </div>
                  <span className="text-lg font-bold text-white group-hover:text-[#0077B5] transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-indigo-300 group-hover:text-[#0077B5] transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER TEXT - Subtle opacity for secondary info */}
        <div className="mt-32 pt-8 border-t border-white/10 flex justify-between items-center text-sm text-indigo-200">
          <p>© 2026 Mads Hammer. Built with React & Vite.</p>
          <div className="flex gap-6">
            <p>Sorø, Denmark</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
