import React from 'react';
import Button from '../components/Button.jsx';
import DownloadResume from '../components/DownloadResume.jsx';

const Resume = () => {
  const resumeUrl = '/assets/Gurmehak_resume_webdev.pdf';

  return (
    <section className="c-space my-20" id="resume">
      <div className="w-full text-white-600">
        <p className="head-text">Resume</p>

        <div className="mt-12 space-y-4">
          <div className="flex justify-start">
            <DownloadResume />
          </div>

          <div className="rounded-lg bg-black-200 border border-black-300 p-3 min-h-[480px]">
            <iframe
              title="Gurmehak Resume"
              src={`${resumeUrl}#view=fitH`}
              className="w-full h-[75vh] rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
