import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter  } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <footer className="bg-slate-800 text-gray-300">
            <div className="container w-[95%]  mx-auto ">
                {/* The First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:justify-items-end py-14 space-y-8 md:space-y-0 border-b-2 border-gray-500">
                    {/* First Col*/}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-1">
                            <img src="/vite.svg" alt="" className="w-5" />
                            <h1 className="text-white text-lg font-semibold">YigDa</h1>
                        </div>
                        <div className="w-full md:w-[90%]">
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque animi doloribus itaque obcaecati est!
                            </p>
                        </div>
                        {/* Social Media Links */}
                        <div className="flex space-x-2 pt-2">
                            <Link to={"/"} className="rounded-md border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold"><FaFacebookF /></Link>
                            <Link to={"/"} className="rounded-md border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold"><FaInstagram /></Link>
                            <Link to={"/"} className="rounded-md border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold"><FaTwitter /></Link>
                            <Link to={"/"} className="rounded-md border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold"><FaLinkedin /></Link>
                        </div>
                    </div>
                    {/* Second */}
                    <div className="flex w-full justify-between">
                        <div className="">
                            <div className="">
                                <h1 className="text-lg text-white font-semibold pb-2">Quick Links</h1>
                            </div>
                            <div className=""> 
                                <div className="">
                                    <a href="#hero" className="">Home</a>
                                </div>
                                <div className="">
                                    <a href="#about" className="">About Us</a>
                                </div>
                                <div className="">
                                    <a href="#activities" className="">Activities</a>
                                </div>
                                <div className="">
                                    <a href="#contact" className="">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        {/* Third */}
                        <div className="">
                            <div className="">
                                <h1 className="text-lg text-white font-semibold pb-2">Get In Touch</h1>
                            </div>
                            <div className=""> 
                                <div className="">
                                    <a href="/">Brusubi Face 2</a>
                                </div>
                                <div className="">
                                    <a href="mailto:yigda@gmail.com">yigda@gmail.com</a>
                                </div>
                                <div className="">
                                    <a href="tel:+220 000 0000">+200 000 0000</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                {/* Second Row */}
                <div className="flex justify-between py-6">
                    <div className="flex items-center space-x-1">
                        <div className=""> Copyright </div> 
                        <div className=""> <FaRegCopyright /> </div>
                        <div className="">2023</div>
                    </div>
                    <div className="">
                        <p className="">Reserved YigDa</p>
                    </div>
                </div>
            </div>
            
        </footer>
     );
}
 
export default Footer;