import {Element} from 'react-scroll';

const About = () => {

  return (
    <Element name='about'>
      <section
        className="w-full px-8 py-10 bg-background-two text-heading"
      >
        <div className="flex flex-col flex-col-reverse items-center justify-center max-w-6xl mx-auto mt-15 lg:flex-row gap-10">
          <div className="w-full lg:w-[40%]">
            <img src="img/me.png" alt="" />
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-primary text-center lg:text-left lg:w-full font-semibold mb-4">
              <h2 className="">ABOUT ME</h2>
            </div>
            <div className="text-4xl text-center font-bold lg:text-5xl lg:text-left w-full">
              <h1>
                I build solutions for the{" "}
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Web
                </span>
              </h1>
            </div>
            <div className="text-center opacity-80 lg:text-left lg:text-xl">
              <p>
                Hi, i'm a passionate Full Stack Developer who loves turning
                ideas into real impactful digital expirienxes. I enjoy building
                modern responsive user-friendly websites and web applications.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between space-y-4 mt-6">
              <div className="p-6 lg:pl-0 w-[100%] bg-header rounded-2xl lg:bg-background-two lg:rounded-none lg:border-r-1 lg:border-gray-500">
                <div className="text-primary text-xl">
                  <i class="fa-solid fa-code"></i>
                </div>
                <div className="font-semibold text-l text-left my-4">
                  <h3>Clean Code</h3>
                </div>
                <div className="opacity-80 text-sm lg:text-l my-4">
                  <p>Writing maintable, scalable and efficient clean code.</p>
                </div>
              </div>

              <div className="p-6 w-[100%] bg-header rounded-2xl lg:bg-background-two lg:rounded-none lg:border-r-1 lg:border-gray-500">
                <div className="text-primary text-xl">
                  <i class="fa-solid fa-mobile"></i>
                </div>
                <div className="font-semibold text-l text-left my-4">
                  <h3>Responsive Design</h3>
                </div>
                <div className="opacity-80 text-sm lg:text-l my-4">
                  <p>
                    Building beautiful interfaces that look greate on all
                    devices.
                  </p>
                </div>
              </div>

              <div className="p-6 w-[100%] bg-header rounded-2xl lg:bg-background-two lg:rounded-none lg:border-r-1 lg:border-gray-500">
                <div className="text-primary text-xl">
                  <i class="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div className="font-semibold text-l text-left my-4">
                  <h3>Performance</h3>
                </div>
                <div className="opacity-80 text-sm lg:text-l my-4">
                  <p>
                    Optimizing applications for speed and the best user
                    experience.
                  </p>
                </div>
              </div>

              <div className="p-6 w-[100%] bg-header rounded-2xl lg:bg-background-two lg:rounded-none">
                <div className="text-primary text-xl">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div className="font-semibold text-l text-left my-4">
                  <h3>User Focused</h3>
                </div>
                <div className="opacity-80 text-sm lg:text-l my-4">
                  <p>
                    Creating solutions that solve real problems for real users.
                  </p>
                </div>
              </div>
            </div>

            <div className="font-bold text-xl lg:w-full lg:text-left">
              <div className="mb-3">
                <h2>My Tech Stack</h2>
              </div>
              <ul className="flex flex-wrap items-center justify-between mt-5 gap-2">
                <li className="flex items-center justify-center gap-4 bg-header p-3 rounded-lg text-sm font-semibold">
                  <i class="fa-brands fa-react text-primary"></i>
                  <h4>React</h4>
                </li>
                <li className="flex items-center justify-center gap-4 bg-header p-3 rounded-lg text-sm font-semibold">
                  <i class="fa-brands fa-react text-primary"></i>
                  <h4>Next JS</h4>
                </li>
                <li className="flex items-center justify-center gap-4 bg-header p-3 rounded-lg text-sm font-semibold">
                  <i class="fa-brands fa-react text-primary"></i>
                  <h4>Javascript</h4>
                </li>
                <li className="flex items-center justify-center gap-4 bg-header p-3 rounded-lg text-sm font-semibold">
                  <i class="fa-brands fa-react text-primary"></i>
                  <h4>Tailwind CSS</h4>
                </li>
                <li className="flex items-center justify-center gap-4 bg-header p-3 rounded-lg text-sm font-semibold">
                  <i class="fa-brands fa-react text-primary"></i>
                  <h4>Node JS</h4>
                </li>
                <li className="flex items-center justify-center gap-4 bg-header p-3 rounded-lg text-sm font-semibold">
                  <i class="fa-brands fa-react text-primary"></i>
                  <h4>Express JS</h4>
                </li>
              </ul>
            </div>

            <div className="flex flex-col tems-center justify-between lg:flex-row bg-header rounded-lg p-5 m-5 space-y-4 w-full">
              <div className="flex items-center justify-center space-x-3 lg:border-r-1 lg:border-r-gray-500 lg:w-[50%]">
                <div className="text-primary px-2 text-3xl">
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="space-y-3">
                  <div className="text-xl font-bold">
                    <h2>Education</h2>
                  </div>
                  <div className="text-xl space-y-3 opacity-80">
                    <h3>Bachelor of Science</h3>
                    <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                      Mathematics and Comuter Science
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-5 opacity-80 lg:w-[50%]">
                <p>
                  Developed a strong foundation in mathematical theory, problem
                  solving, algorithm and software development.Combined
                  analytical thinking with practical programming skills to build
                  scalable and efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-header rounded-lg items-center justify-between lg:flex-row gap-3 max-w-6xl mx-auto p-8 mt-10 lg:mt-0">
          <div className="flex items-center justify-center space-x-4 gap-3 lg:border-r-1 border-r-gray-500 lg:pr-8">
            <div className="text-primary text-3xl">
              <i class="fa-regular fa-face-smile"></i>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold ">20+</h2>
              <h3 className="opacity-80">Projects Completed</h3>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 lg:border-r-1 border-r-gray-500 lg:pr-8">
            <div className="text-primary text-3xl">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold ">1+</h2>
              <h3 className="opacity-80">Years of Experience</h3>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 gap-3 lg:border-r-1 border-r-gray-500 lg:pr-8">
            <div className="text-primary text-3xl">
              <i class="fa-solid fa-users"></i>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold ">15+</h2>
              <h3 className="opacity-80">Happy Clients</h3>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 gap-3">
            <div className="text-primary text-3xl">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold ">2+</h2>
              <h3 className="opacity-80">Certifications</h3>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
