// import { CiMenuFries } from "react-icons/ci";
// import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <div className="border-b-2 py-4 shadow-xl w-full bg-opacity-60  bg-slate-100">
            <div className="flex items-center justify-between container mx-auto">
                <div className="text-2xl font-bold">
                    <h3 className="">YigDa</h3>
                </div>
                {/* <div className="">
                    <CiMenuFries />
                    <IoIosClose />
                </div> */}
                <nav className="md:flex items-center justify-between gap-x-10">
                    <div className="md:flex items-center gap-x-5">
                        <div className="font-bold ">
                            <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/"} >Home</Link>
                        </div>
                        <div className="font-bold ">
                            <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/about"} >About</Link>
                        </div>
                        <div className="font-bold ">
                            <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/activities"} >Activities</Link>
                        </div>
                    </div>
                    <div className="font-bold text-slate-100">
                        <Link className="bg-blue-500 py-2 px-5 rounded-full hover:bg-opacity-80 transition-all duration-300 cursor-pointer" to={"/conatct"} >Contact Us</Link>
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;