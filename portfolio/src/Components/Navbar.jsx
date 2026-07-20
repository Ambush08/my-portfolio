import {useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-extrabold lg:text-3xl">Ambush.<span className="text-primary">Dev</span></div>
            <button onClick={()=>{setIsOpen(!isOpen)}} className="text-2xl sm:hidden">
                {
                    isOpen ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-bars"></i>
                }
            </button>
        </div>
    </header>
  )
}

export default Navbar