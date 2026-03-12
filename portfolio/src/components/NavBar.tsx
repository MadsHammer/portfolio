const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className=" mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* TEXT LOGO */}
        <div className="flex items-center group cursor-pointer">
          <span className="text-2xl tracking-tighter font-black text-gray-900 uppercase">
            Mads
            <span className="font-light text-gray-400 ml-1 group-hover:text-indigo-500 transition-colors">
              Hammer
            </span>
          </span>
          {/* Subtle Accent Dot */}
          <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 ml-1 mt-3"></div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#projects" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#about" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-indigo-600 transition-all">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;