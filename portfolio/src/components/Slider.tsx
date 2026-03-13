import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const techStack = [
    "React", "Redux Toolkit", "Vite", "Tailwind CSS", "Bootstrap", "VS Code", "VUE",
    ".NET", "C#", "SQL", "Supabase", "Vercel", "GitHub", "RTK Query", "Entity Framework"
  ];

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="custom-max-width mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="flex justify-end w-24 border-t-4 border-dotted border-indigo-200 h-0 "></div>
              <span className="text-sm font-bold tracking-[0.3em] text-indigo-600 uppercase">Portfolio</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.55] tracking-tighter">
              Hi there! <br />
              <span className="text-gray-300 text-3xl lg:text-5xl font-light tracking-tight italic">
                Have a look around
              </span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-xl text-gray-600 leading-relaxed">
                My name is Mads and I'm currently studying Software Development at Zealand. 
                This is my portfollio website dedicated to showing where my interests lie, and show  
                <span className="relative inline-block px-2 group">
  <span className="relative z-10 inline-block font-black italic text-indigo-400 
                   transform -skew-x-12 scale-110 transition-transform duration-300 
                   group-hover:scale-175 group-hover:-rotate-5 cursor-default">
    YOU!
  </span>
</span>what I've made, both in my sparetime and also at Zealand as part of a school project.
               
              </p>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100"
              >
                Explore Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative max-w-120">
            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl rotate-[2deg] hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/me.jpg" 
                alt="Mads Hammer" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-900 uppercase tracking-tighter italic">Based in Denmark</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="relative py-10 border-y border-gray-100 bg-gray-50/50 rotate-[-2deg] scale-[1.05]">
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-2">
            {[...techStack, ...techStack].map((tech, i) => (
              <span 
                key={i} 
                className="marquee-text-stroke text-3xl lg:text-3xl font-black text-transparent opacity-20 hover:opacity-100 hover:scale-110 transition-all cursor-default uppercase hero-title"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;