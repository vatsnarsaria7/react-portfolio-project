//Import logo image and add in the navbar 9:32
import { FaLinkedin, FaGithub } from "react-icons/fa";
import vatsLogo from "../assets/vatsLogo.jpg";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={vatsLogo} alt="Vats Narsaria Logo" />
      </div> */}
      <div className="m-8 flex items-center justify-center gap-4 test-2xl">
        <a
          href="https://www.linkedin.com/in/vats-narsaria/"
          className="text-xl text-gray-600 mr-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vatsnarsaria7"
          className="text-xl text-gray-600"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
