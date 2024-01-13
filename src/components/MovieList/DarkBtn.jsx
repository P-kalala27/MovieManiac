import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiMoon, BiSun } from "react-icons/bi";


// eslint-disable-next-line react/prop-types
const DarkBtn = () => {
    useEffect(()=> {
      const isDark = localStorage.getItem("isDarkMode")
      if(isDark === "true"){
        window.document.documentElement.classList.add("dark")
      }
    }, [])
  const handleDarkMode = ()=>{
        window.document.documentElement.classList.toggle("dark")
        localStorage.setItem("isDarkMode", 
        window.document.documentElement.classList.contains("dark")
        );
    }
  return (
    <div className="absolute top-5 right-0 px-5 ">
        <button onClick={handleDarkMode} className="bg-gray-900 rounded-full text-white px-4 py-2 dark:bg-white dark:text-gray-950 shadow-lg">
            <BiSun className="hidden dark:block"/>
            <BiMoon className="dark:hidden"/>
        </button>

        <a href="/home" className=" scroll-smooth transition-all">
        <button className="fixed bottom-4 right-4 bg-gray-900 rounded-lg
         text-gray-200 px-1 py-3 animate-bounce  dark:bg-gray-100 dark:text-gray-950 z-50">
          <AiOutlineArrowUp className="text-xl font-bold"/>
        </button>
        </a>
    </div>
  )
}

export default DarkBtn