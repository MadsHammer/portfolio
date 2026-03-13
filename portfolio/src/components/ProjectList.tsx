import { useGetProjectsQuery } from '../services/projectApi';
import type { Project } from '../services/projectApi';
import ProjectGallery from './ProjectGallery'; // Import the new component

const ProjectList = () => {
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  if (isLoading) return <p className="text-center text-green-500 py-20">Loading Projects...</p>;
  if (isError) return <p className="text-center text-red-500 py-20">Error loading data.</p>;

  return (
    <section id="projects" className="bg-gray-50">
    <div className="max-w-6xl custom-max-width mx-auto px-6 py-20">
      <div className="flex flex-col gap-32">
        {projects?.map((project: Project, index: number, ) => (
          <div key={project.id} className="flex flex-col  border-b border-gray-200 pb-20">
           
            {/* Top Section: Text & Main Video */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-4/12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-indigo-500">0{index + 1}.</span>
                  <div className="flex justify-end w-24 border-t-4 border-dotted border-indigo-200 h-0 "></div>
                 <span className="uppercase tracking-wider text-sm font-medium text-gray-500">
  {project.category}
</span>
                </div>
                <h5 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ">{project.title}</h5>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{project.description}</p>
               
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="w-full">
                     <p className="text-lg font-semibold text-gray-700">Tech Stack:</p>
                    </div>
                 
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100">{tech}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="w-full">
                    <p className="text-lg font-semibold text-gray-700">Tools Used:</p>
                       </div>                  
                       {project.tools.map((tool) => (
                    <span key={tool} className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100">{tool}</span>
                  ))}
                </div>



                <div className="flex gap-6">
  {project.liveUrl && (
    <a 
      href={project.liveUrl} 
      target="_blank" 
      rel="noreferrer" 
      className="font-bold underline decoration-2 underline-offset-4 hover:text-indigo-600 transition-colors"
    >
      Live Demo
    </a>
  )}
  
  <a 
    href={project.githubUrl} 
    target="_blank" 
    rel="noreferrer" 
    className="font-bold underline decoration-2 underline-offset-4 hover:text-indigo-600 transition-colors"
  >
    Source Code
  </a>
</div>
              </div>
             

              {/* Video Side */}
              <div className="w-full lg:w-8/12 rounded-xl overflow-hidden shadow-2xl bg-black">
                <video src={project.video} autoPlay loop muted playsInline className="w-full h-auto max-h-[700px]" />
              </div>
            </div>

            {/* Gallery */}
            <ProjectGallery gallery={project.gallery} />

          </div>
        ))}
      </div>
    </div>
  </section>
    );
};

export default ProjectList;