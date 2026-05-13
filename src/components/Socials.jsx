import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-3">
      <a href="https://www.linkedin.com/in/gurmehak-kaur2004" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a href="https://github.com/gurmehakk20" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaGithub className="w-6 h-6" />
      </a>
      <a href="https://x.com/Gurmehakk2004" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTwitter className="w-6 h-6" />
      </a>
      {/* <a href="https://www.instagram.com/mehak_kaur20_/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram className="w-6 h-6" />
      </a> */}
      
    </div>
  );
};

export default Socials;