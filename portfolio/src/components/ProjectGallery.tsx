import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  gallery: string[];
}

const ProjectGallery = ({ gallery }: Props) => {
  if (!gallery || !Array.isArray(gallery) || gallery.length === 0) {
    return null;
  }
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/slider mt-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400"></p>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full cursor-pointer border border-white/10 bg-gray-900 hover:bg-purple-600 transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full cursor-pointer border border-white/10 bg-gray-900 hover:bg-purple-600 transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth py-2"
      >
        {gallery?.map((img, i) => (
          <div
            key={i}
            className="min-w-[70%] md:min-w-[calc(23%-11px)] md:max-h-[200px] aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:scale-[1.02] transition-all snap-start"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img}
              className="w-full h-full object-cover opacity-100 hover:opacity-70 transition-opacity overflow-hidden"
              alt="Gallery item"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={gallery.map((src) => ({ src }))}
      />
    </div>
  );
};

export default ProjectGallery;
