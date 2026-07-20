import {useState} from 'react';
import {menu} from '../Backend/data';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-extrabold lg:text-3xl">Ambush.<span className="text-primary text-heading">Dev</span></div>
            <button onClick={()=>{setIsOpen(!isOpen)}} className="text-2xl sm:hidden">
                {
                    isOpen ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-bars"></i>
                }
            </button>
            <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-5 lg:font-bold text-heading text-l">
                    {
                        menu.map((item) => {
                            return(
                                <li>
                                    <a key={item.label} href={item.url}>{item.label}</a>
                                </li>
                            )
                        })
                    }
            </ul>
            <div className="hidden lg:flex lg:items-center lg:gap-3 lg:justify-center">
                <a href="">Connect</a>
                <button><i class="fa-solid fa-moon"></i></button>
            </div>
        </div>
    </header>
  )
}

export default Navbar