import {useState} from 'react'
import Tools from './Tools';
import { FiArrowUpRight } from "react-icons/fi";


const Projects = ({projects}) => {

    const [openProject, setOpenProject] = useState([]);
    const [showContent, setShowContent] = useState(false);

    /*const openTools = (getIndex) => {
        setOpenProject(openProject === getIndex ? null : getIndex);

    }*/

    const openTools = (getIndex) => {
        let cpyOpenProject = [...openProject];

        const index = cpyOpenProject.indexOf(getIndex);

        if(index === -1) {
            cpyOpenProject.push(getIndex);
        } else {
            cpyOpenProject.splice(index, 1);
        }

        setOpenProject(cpyOpenProject);
        setShowContent(!showContent);
    }

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-4 py-6">
        {
            projects.map((project, index) => {
                return <div key={project.title} className="bg-background-two p-4 rounded-lg space-y-4 lg:w-[70%]">
                    <div className="contain-content w-full rounded-lg">
                        <img src={project.image} alt={project.tittle} />
                    </div>
                    <div className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent font-bold">
                        <h3>{project.type}</h3>
                    </div>
                    <div className="font-bold text-xl">
                        <h2>{project.title}</h2>
                    </div>
                    <div className="opacity-80">
                        <p>{project.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div onClick={() => openTools(index)} className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent hover:font-bold cursor-pointer flex items-center gap-1">
                            {
                                showContent ? <h3>View Less</h3> : <h3>View More</h3>
                            }
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="text-github pb-1 hover:text-red-500 transition-colors hover:border-b-2 hover:border-b-text-red-500  cursor-pointer flex items-center gap-1">
                        <a href="https://github.com/Ambush08" target="_blank">Visit Github</a>
                        <FiArrowUpRight />
                    </div>
                    </div>

                    {
                        openProject.indexOf(index) > -1 && <Tools tools={project.tools} /> 
                    }
                </div>
            })
        }
    </div>
  )
}

export default Projects