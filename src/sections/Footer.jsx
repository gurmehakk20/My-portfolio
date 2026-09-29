import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <p className="text-white-600 text-sm">© 2026 Gurmehak Kaur</p>

      <Socials />

      <p className="text-white-600 text-sm">React · Vite · Three.js</p>

      {/* Required attribution for the CC BY 3.0 hero model */}
      <p className="w-full text-white-600 text-xs">
        Hero 3D model:{' '}
        <a
          href="https://poly.pizza/m/2EHvZLax4Y3"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          “Computer” by Poly by Google
        </a>
        , licensed{' '}
        <a
          href="https://creativecommons.org/licenses/by/3.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          CC BY 3.0
        </a>
        , modified.
      </p>
    </footer>
  );
};

export default Footer;
