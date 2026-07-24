import { Link } from "react-scroll";
import { menu } from "../Backend/data";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-header w-full px-8 py-10">
      <div className="flex flex-col items-start max-w-6xl mx-auto text-heading lg:flex-row lg:justify-between space-y-8 gap-10 pd-6 border-b-1 border-b-gray-500">
        <div className="flex flex-col space-y-4 items-start">
          <div>
            <Link
              to="home"
              smooth={true}
              duration={300}
              offset={-80}
              className="text-2xl font-extrabold lg:text-4xl cursor-pointer"
            >
              Ambush.<span className="text-primary text-heading">Dev</span>
            </Link>
          </div>

          <div className="opacity-80 text-sm tracking-wide lg:text-md">
            <p>
              Designed and developed with passion using React and modern web
              technologies. Thanks for visiting my portfolio. I look forward to
              collaborating on your next project.
            </p>
          </div>

          <ul className="flex  items-center gap-4 text-sm lg:text-md">
            {menu.map((item) => {
              return (
                <li
                  key={item.label}
                  className={`lg:hover:text-primary cursor-pointer`}
                >
                  <Link
                    to={item.url}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="pb-1"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center space-y-4 lg:space-y-8 pb-6">
          <div className="flex flex-col items-start space-y-3 lg:pt-4">
            <h2 className="font-semibold">Subscribe to my newsletter.</h2>
            <p className="opacity-80 text-sm lg:text-md">
              The latest offers, services, articles and resources sent to your
              inbox.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <input
              className="border-1 border-gray-500 px-3 py-2 rounded-lg focus:outline-0"
              type="email"
              name="email"
              placeholder="Enter your email..."
              required
            />
            <button type="submit" className="bg-primary px-3 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-6 text-heading flex flex-col items-center lg:flex-row lg:justify-between lg:items-center space-y-4">
        <div className="font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
          <p>&© 2026 Warren Ambuga. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-xl lg:text-2xl">
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-primary transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-primary transition-colors" />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-primary transition-colors" />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
