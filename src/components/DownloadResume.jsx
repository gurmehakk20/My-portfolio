import React from 'react';
import Button from './Button.jsx';

const DownloadResume = ({ containerClass = '', buttonClass = 'sm:w-fit w-full' }) => {
  const resumeUrl = '/assets/Gurmehak_resume_webdev.pdf';

  return (
    <a href={resumeUrl} download className={containerClass}>
      <Button name="Download Resume" isBeam containerClass={buttonClass} />
    </a>
  );
};

export default DownloadResume;


