import { Link, Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home">
      <section id="home" className="w-full px-8 py-10 bg-background h-100vh">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center max-w-6xl mx-auto mt-35 lg:mt-20 pb-14">
          <div className="flex flex-col items-center justify-center space-y-6 ">
            <div className="text-center border-1 border-primary px-2 py-1 rounded-full lg:text-left lg:w-full lg:border-0">
              <h3 className="font-semibold text-2xl lg:text-3xl lg:text-left bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Hey, I'm Warren.
              </h3>
            </div>
            <div className="text-5xl font-extrabold text-center lg:text-left lg:text-7xl space-y-4 w-full">
              <h1 className="text-heading">A Full Stack</h1>
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Developer
              </span>
            </div>
            <div className="text-text text-center text-heading space-y-3 lg:text-left lg:text-xl opacity-80">
              <p>
                Building scallable, user-focused web applications with modern
                technologies.
              </p>
              <p>
                Helping businesses succeed through innovative full-stack web
                development solutions.
              </p>
            </div>
            <div className="text-heading flex items-center justify-start gap-4 lg:w-full">
              <Link
                to="contacts"
                smooth={true}
                duration={500}
                offset={-80}
                className="border-1 border-primary px-4 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 lg:text-l opacity-80 tracking-normal"
              >
                Connect
                <i class="fa-solid fa-arrow-right"></i>
              </Link>

              <a
                href="https://drive.google.com/file/d/1GO9KtS4CauQPBIlH7PLJl7AAqvdGzXEa/view?usp=drive_link"
                className="border-1 border-github hover:bg-github transition-colors duration-300 py-3 px-4 rounded-lg lg:text-l opacity-80 tracking-normal"
                target="_blank"
              >
                Download CV
                <i class="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
          <div className="py-6">
            <img src="img/me.png" alt="" />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
