import { motion } from "motion/react"
import Projects from './Projects';
import {projects} from '../Backend/data';

const Portfolio = () => {
  return (
      <section id="portfolio" className="bg-background text-heading w-full px-8 py-15">
        <motion.div
          initial={{y:50, opacity:0}}
          whileInView={{y:0 , opacity: 1}}
          transition={{duration:0.8}}
        
        className="max-w-6xl mx-auto flex flex-col items-center      justify-center space-y-5 my-8">
          <div className="flex flex-col items-center space-y-5">
            <div className="text-l text-primary pb-3 border-b-2 border-b-primary border-b-w-lg">
              <h3>MY PROJECTS</h3>
            </div>
            <div className="text-center text-4xl font-bold lg:text-5xl">
              <h2>
                Projects I've{" "}
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  built
                </span>
              </h2>
            </div>

            <motion.div
              initial={{y:10, opacity:0}}
              whileInView={{y:0 , opacity: 1}}
              transition={{duration:0.8}}
            
            className="text-center opacity-80">
              <p>Here are some of the projects I've worked on.</p>
              <p>
                Each one reflects my passion for solving real problems and
                building greate user exprience.
              </p>
            </motion.div>
          </div>

          <Projects projects={projects}/>
        </motion.div>
      </section>
  );
};

export default Portfolio;
