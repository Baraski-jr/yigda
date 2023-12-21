// import { CiMenuFries } from "react-icons/ci";
// import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";


const Header = () => {

    const [stick, setStick ] = useState<boolean>(false)
    const scroll = () => {
        if(window.scrollY >= 90) {
            setStick(true);
        }
        else {
            setStick(false)
        }
    }
    window.addEventListener('scroll', scroll)
    return ( 
        <div className={stick ? "py-4 w-full bg-slate-200 fixed z-50" : "py-4 w-full fixed"}>
            <div className="flex items-center justify-between container w-[90%] mx-auto">
                <div className="text-2xl font-bold text-white md:text-slate-700">
                    <h3 className="">YigDa</h3>
                </div>
                <div className=" text-white text-2xl font-bold md:hidden">
                    {/* <CiMenuFries /> */}
                    <HiMenuAlt3 /> 
                    {/* <IoIosClose /> */}
                </div>
                <nav className="md:flex items-center justify-between gap-x-10 hidden">
                    <div className="md:flex items-center gap-x-5 text-slate-500">
                        <div className="font-bold ">
                            <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/"} >Home</Link>
                        </div>
                        <div className="font-bold ">
                            <a className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" href="#about" >About</a>
                            {/* <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/about"} >About</Link> */}
                        </div>
                        <div className="font-bold ">
                            <a className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" href="#activities" >Activities</a>
                            {/* <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/activities"} >Activities</Link> */}
                        </div>
                    </div>
                    <div className="font-bold text-slate-100">
                        <a className="bg-blue-500 py-2 px-5 rounded-full hover:bg-opacity-80 transition-all duration-300 cursor-pointer" href="#contact" >Contact Us</a>
                        {/* <Link className="bg-blue-500 py-2 px-5 rounded-full hover:bg-opacity-80 transition-all duration-300 cursor-pointer" to={"/conatct"} >Contact Us</Link> */}
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;