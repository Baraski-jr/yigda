// import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [stick, setStick] = useState<boolean>(false);
  const scroll = () => {
    if (window.scrollY >= 90) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  window.addEventListener("scroll", scroll);
  return (
    <div
      className={
        stick ? "py-4 w-full bg-slate-200 fixed z-50" : "py-4 w-full fixed"
      }
    >
      <div className="flex items-center justify-between container w-[90%] mx-auto">
        <div className="text-2xl font-bold text-slate-700">
          <h3 className="hh">YigDa</h3>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-full z-40 text-slate-700 text-2xl font-bold md:hidden"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="" id="mdt">
                YigDa
              </h3>
            </div>
            <div className="cursor-pointer">
              {open ? <IoIosClose /> : <HiMenuAlt3 />}
              <div className={open ? "" : "hide"}>
                <ul className="py-4 text-[1.2rem]">
                  <li>
                    <Link
                      className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                      to={"/"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                      href="#activities"
                    >
                      Activities
                    </a>
                  </li>
                  <li>
                    <Link
                      className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                      to={"/members"}
                    >
                      Members
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="md:flex items-center justify-between gap-x-10 hidden">
          <div className="md:flex items-center gap-x-5 text-slate-500">
            <div className="font-bold ">
              <Link
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                to={"/"}
              >
                Home
              </Link>
            </div>
            <div className="font-bold ">
              <a
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                href="#about"
              >
                About
              </a>
              {/* <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/about"} >About</Link> */}
            </div>
            <div className="font-bold ">
              <a
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                href="#activities"
              >
                Activities
              </a>
              {/* <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/activities"} >Activities</Link> */}
            </div>
            <div className="font-bold ">
              {/* <a className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" href="#activities" >Activities</a> */}
              <Link
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                to={"/members"}
              >
                Members
              </Link>
            </div>
          </div>
          <div className="font-bold text-slate-100">
            <a
              className="bg-blue-500 py-2 px-5 rounded-full hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
              href="#contact"
            >
              Contact Us
            </a>
            {/* <Link className="bg-blue-500 py-2 px-5 rounded-full hover:bg-opacity-80 transition-all duration-300 cursor-pointer" to={"/conatct"} >Contact Us</Link> */}
          </div>
        </nav>
        <nav className="hidden z-30 fixed bg-slate-200 right-0 top-0 h-full w-[80%] space-y-6 pt-20 pl-5 bg-opacity-90">
          <div className="space-y-2 text-slate-500">
            <div className="font-bold text-xl ">
              <Link
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                to={"/"}
              >
                Home
              </Link>
            </div>
            <div className="font-bold text-xl ">
              <a
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                href="#about"
              >
                About
              </a>
              {/* <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/about"} >About</Link> */}
            </div>
            <div className="font-bold text-xl ">
              <a
                className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
                href="#activities"
              >
                Activities
              </a>
              {/* <Link className="border-b-2 border-transparent hover:border-blue-500 transition-all duration-300" to={"/activities"} >Activities</Link> */}
            </div>
          </div>
          <div className="font-bold text-xl text-slate-100">
            <a
              className="bg-blue-500 py-2 px-5 rounded-xl hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
              href="#contact"
            >
              Contact Us
            </a>
            {/* <Link className="bg-blue-500 py-2 px-5 rounded-full hover:bg-opacity-80 transition-all duration-300 cursor-pointer" to={"/conatct"} >Contact Us</Link> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
