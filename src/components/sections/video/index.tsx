import { FaPlayCircle } from "react-icons/fa";

const Video = () => {
    return ( 
        <div className=" h-[20vh] md:h-[50vh] portrait:h-[25rem] relative bg-vid hue-rotate-50 bg-no-repeat bg-cover bg-left-top bg-origin-border		">
            <div className="">
                <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-60 md:h-[50vh] portrait:h-[25rem] w-full absolute"></div>
            </div>
            <div className="w-full h-full flex items-center">
                <div className="container grid md:grid-cols-2 lg:max-w-[80rem] w-[90%] lg:w-[80%] mx-auto">
                    <div className="space-y-3">
                        <div className="pr-14">
                            <h1 className="text-white text-3xl font-bold">We'd love to hear from you</h1>
                        </div>
                        <div className="pr-6 pb-5">
                            <p className="text-white font-semibold">Lorem, ipsum dolor sit amet Officia illum, quod maxime sit, harum vero tempore dicta inventore, necessitatibus saepe nulla sint.</p>
                        </div>
                        <div className="hidden md:block">
                            <a href="/" className="bg-blue-500 py-2 px-4 text-white font-semibold rounded-full">Discover more</a>
                        </div>
                    </div>                    
                    {/* play Btn */}
                        <div className="w-fit flex items-center md:ml-[7rem] ml-auto">
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