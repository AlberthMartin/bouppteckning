import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Lindberg-logo.svg";


export const Navbar = ({menuOpen, setMenuOpen}) =>{

    useEffect(() =>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])

    return(
        //Fastsatt uppe på sidan, w-full
        <nav className="fixed top-0 w-full z-50 bg-[#3A2B1C] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="mx-4">

            <div className="flex justify-between items-center h-16">
                <a href="#hem" className="">
                    {/*<FontAwesomeIcon icon={faHouse} /> */}
                    <img src={Logo} alt="Logo" className="h-16 w-50 mx-5"/>
                </a>

                {/* mobile menu */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    {/* hamburger icon */}
                    <FontAwesomeIcon icon={faBars} />
                </div>

                {/* desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#hem" 
                    className="relative text-[#F4EFEA] hover:text-[#C7A76C] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A76C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Hem {" "}

                    </a>
                    <a href="#bouppteckning" 
                    className="relative text-[#F4EFEA] hover:text-[#C7A76C] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A76C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Bouppteckning {" "}

                    </a>
                    <a href="#FAQ" 
                    className="relative text-[#F4EFEA] hover:text-[#C7A76C] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A76C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Vanliga frågor {" "}

                    </a>
                    <a href="#kontakta" 
                    className="relative text-[#F4EFEA] hover:text-[#C7A76C] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A76C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Kontakta mig{" "}

                    </a>

                    <a href="#dataskydd" 
                    className="relative text-[#F4EFEA] hover:text-[#C7A76C] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A76C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Dataskydd {" "}

                    </a>
                </div>

            </div>
        </div>

    </nav>
    )
}