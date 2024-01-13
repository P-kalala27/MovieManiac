
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant";

const Navbar = () => {

  
  return (
    <header className="w-full h-9 p-5 mb-3">
        <nav className="flex justify-between items-center max-w-[1300px] mx-auto ">
            <a href="/" className="text-3xl text-orange-400"
            >Movie Maniac
            </a>

            <ul className="flex justify-center items-center gap-16 " id="home">
                {
                    navLinks.map((link)=> (
                        <li key={link.label}>
                            <NavLink to={link.href} className="text-lg leading-none text-black
                            hover:text-orange-300 dark:text-gray-200"> {link.label} </NavLink>
                        </li>
                    ))
                }
            </ul>
            
        </nav>
        <div className="py-4 border-b"></div>
    </header>
  )
}

export default Navbar