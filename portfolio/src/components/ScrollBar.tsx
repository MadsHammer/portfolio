import { useState, useEffect } from "react";
import { useGetProjectsQuery } from "../services/projectApi";

const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const steps = [
    { id: "intro", label: "Intro" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
  ];

  const { data: projects } = useGetProjectsQuery();

  useEffect(() => {
    const sectionIds = ["intro", "projects", "about"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -80% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projects]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-100 hidden xl:flex flex-col items-end">
      <div className="flex flex-col gap-10">
        {steps.map((step) => {
          const isActive = activeSection === step.id;
          const isAbout = step.id === "about";

          return (
            <button
              key={step.id}
              onClick={() => scrollTo(step.id)}
              className="group flex items-center gap-6 focus:outline-none justify-end cursor-pointer"
            >
              {/* Label section */}
              <span
                className={`text-sm tracking-[0.1em] font-bold transition-all duration-500 ${
                  isActive
                    ? isAbout
                      ? "text-indigo-400 opacity-100"
                      : "text-indigo-600 opacity-100"
                    : "text-gray-400 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                {step.label}
              </span>

              {/* Indicator Container */}
              <div className="relative flex items-center justify-center">
                {/* The Outer Border (Pill shape) */}
                <div
                  className={`absolute w-5 h-14 border border-indigo-200 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />

                {/* The Inner Line */}
                <div
                  className={`relative w-1 h-8 rounded-full transition-all duration-500 ${
                    isActive
                      ? isAbout
                        ? "bg-indigo-300"
                        : "bg-indigo-400"
                      : "bg-gray-300 group-hover:bg-indigo-200"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default VerticalNav;
