import DownloadResume from '../components/DownloadResume.jsx';
import useNearViewport from '../hooks/useNearViewport.js';

const Resume = () => {
  const resumeUrl = '/assets/Gurmehak_Kaur_SDE.pdf';
  // Only attach the PDF once the section is near — an eager PDF plugin slows load and blocks the back/forward cache.
  const viewer = useNearViewport();

  return (
    <section className="c-space my-20" id="resume">
      <div className="w-full text-white-600">
        <h2 className="head-text">Resume</h2>

        <div className="mt-12 space-y-4">
          <div className="flex justify-start">
            <DownloadResume />
          </div>

          <div ref={viewer.ref} className="rounded-lg bg-black-200 border border-black-300 p-3 min-h-[480px]">
            {viewer.hasEntered ? (
              <iframe
                title="Gurmehak Resume"
                src={`${resumeUrl}#view=fitH`}
                loading="lazy"
                className="w-full h-[75vh] rounded-md"
              />
            ) : (
              <div className="w-full h-[75vh]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
