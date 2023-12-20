import { FaPlayCircle } from "react-icons/fa";

const Video = () => {
    return ( 
        <div className="h-[45vh] portrait:h-[25rem] relative">
            <div className="">
                <img src="/teams.png" alt="" className="h-[45vh] portrait:h-[25rem] -z-20 w-full object-cover object-top absolute" />
            </div>
            <div className="z-100 bg-fuchsia-300 b bg-opacity-50 w-full h-full flex items-center">
                <div className="container grid grid-cols-2 lg:max-w-[80rem] lg:w-[80%] mx-auto">
                    <div className="space-y-3">
                        <div className="pr-14">
                            <h1 className="text-white text-3xl font-bold">We'd love to hear from you</h1>
                        </div>
                        <div className="pr-6 pb-5">
                            <p className="text-slate-900 font-semibold">Lorem, ipsum dolor sit amet Officia illum, quod maxime sit, harum vero tempore dicta inventore, necessitatibus saepe nulla sint.</p>
                        </div>
                        <div className="">
                            <a href="/" className="bg-fuchsia-600 py-2 px-4 text-white font-semibold rounded-full">Discover more</a>
                        </div>
                    </div>                    
                    {/* play Btn */}
                        <div className="w-fit flex items-center ml-[7rem]">
                            <div className="text-5xl cursor-pointer border-2 border-fuchsia-700 rounded-full  text-white">
                                <FaPlayCircle />
                            </div>
                        </div>
                    {/*  */}
                </div>
            </div>
        </div>
     );
}
 
export default Video;