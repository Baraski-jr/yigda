import ImageCard from "../../cards/image";

const Hero = () => {
    return ( 
        <div id="hero" className="bg-[#E6F0F9] min-h-[100vh] portrait:min-h-[40rem] flex items-center relative -z-20">
            {/* background design image */}
            <div className="hidden md:block bg-[#002745] w-[40rem] rounded-[5rem] h-[55rem] absolute right-0 -top-[14.5rem] rotate-[30deg] translate-x-[25rem]"></div>
            <div className="md:hidden bg-[#002745] w-[25rem] h-[35rem] rounded-[5rem] absolute right-0 -top-[2rem] rotate-[28deg] z-10 translate-x-[15rem]"></div>
            {/*  */}
            <div className="md:grid grid-cols-2 z-10 gap-x-3 items-center container lg:max-w-[80rem] lg:w-[90%] md:w-[95%] w-[90%] mx-auto">
                {/* First Column */}
                <div className="pr-10 space-y-3 text-slate-500">
                    <div className="font-bold text-3xl md:text-6xl">
                        <h1 className="">Different Faiths</h1>
                        <h1 className="">Common Goal.</h1>
                    </div>
                    <div className="md:text-slate-800 text-slate-500 font-semibold text-xl pb-6">
                        <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="">
                        <a href="/" className="bg-blue-500 py-3 px-5 text-white font-semibold rounded-full">Discover more</a>
                    </div>
                </div>
                {/* Right Column Image */}
                <div className="hidden md:block">
                    <ImageCard />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;