import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <p className="text-white-500 text-sm">© 2026 Gurmehak Kaur</p>

      <Socials />

      <p className="text-white-500 text-sm">React · Vite · Three.js</p>
    </footer>
  );
};

export default Footer;
