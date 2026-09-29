import { lazy, Suspense, useState } from 'react';

import { myProjects } from '../constants/index.js';
import SceneBoundary from '../components/SceneBoundary.jsx';
import SceneFallback from '../components/SceneFallback.jsx';
import useNearViewport from '../hooks/useNearViewport.js';

// The 3D monitor (and its project video texture) only loads once the section is near the viewport.
const ProjectScene = lazy(() => import('../components/ProjectScene.jsx'));

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const scene = useNearViewport();

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="projects">
      <h2 className="head-text">My Selected Work</h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt=""
              width="1038"
              height="936"
              loading="lazy"
              decoding="async"
              className="w-full max-h-60 sm:max-h-80 md:max-h-96 object-cover rounded-xl"
            />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                className="max-w-full max-h-full object-contain shadow-sm"
                src={currentProject.logo}
                alt={`${currentProject.title} logo`}
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* `key` remounts the block on project change so the CSS fade-in replays */}
          <div key={selectedProjectIndex} className="flex flex-col gap-5 text-white-600 my-5">
            <h3 className="text-white text-2xl font-semibold animatedText">{currentProject.title}</h3>

            <p className="animatedText">{currentProject.desc}</p>
            {currentProject.subdesc ? <p className="animatedText">{currentProject.subdesc}</p> : null}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={tag.id ?? index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} width="24" height="24" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
                href={currentProject.href}
                target="_blank"
                rel="noopener noreferrer">
                <p>Live demo</p>
                <img src="/assets/icons/arrow-up.png" alt="" width="12" height="12" className="w-3 h-3" />
              </a>
              {currentProject.github ? (
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <p>Source code</p>
                  <img src="/assets/icons/arrow-up.png" alt="" width="12" height="12" className="w-3 h-3" />
                </a>
              ) : null}
              {currentProject.admin ? (
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
                  href={currentProject.admin}
                  target="_blank"
                  rel="noopener noreferrer">
                  <p>Admin panel</p>
                  <img src="/assets/icons/arrow-up.png" alt="" width="12" height="12" className="w-3 h-3" />
                </a>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button type="button" className="arrow-btn" onClick={() => handleNavigation('previous')} aria-label="Previous project">
              <img src="/assets/icons/left-arrow.png" alt="" width="16" height="16" />
            </button>

            <button type="button" className="arrow-btn" onClick={() => handleNavigation('next')} aria-label="Next project">
              <img src="/assets/icons/right-arrow.png" alt="" width="16" height="16" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scene.ref}
          className="border border-black-300 bg-black-200 rounded-lg h-[320px] sm:h-[380px] md:h-full md:min-h-[480px]"
        >
          {scene.hasEntered ? (
            <SceneBoundary fallback={<SceneFallback failed />}>
              <Suspense fallback={<SceneFallback label="Loading project preview" />}>
                <ProjectScene texture={currentProject.texture} active={scene.isVisible} />
              </Suspense>
            </SceneBoundary>
          ) : (
            <SceneFallback label="Loading project preview" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
