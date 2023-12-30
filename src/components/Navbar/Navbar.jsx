import { navLinks } from "../../constant"

const Navbar = () => {
  return (
    <header className="w-full h-9 p-5 mb-3">
        <nav className="flex justify-between items-center max-w-[1540px] mx-auto ">
            <a href="/" className="text-3xl text-orange-400"
            >Movie Maniac
            </a>

            <ul className="flex justify-center items-center gap-16 ">
                {
                    navLinks.map((link)=> (
                        <li key={link.label}>
                            <a href="" className="text-lg leading-none text-gray-200
                            hover:text-orange-300"> {link.label} </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar