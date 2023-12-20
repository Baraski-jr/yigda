import ImageCard from "../../cards/image";

const Hero = () => {
    return ( 
        <div className="bg-[#E6F0F9] min-h-[90vh] portrait:min-h-[40rem] flex items-center pb-12 relative -z-20">
            {/* background design image */}
            <div className="bg-[#002745] w-[40rem] h-[40rem] absolute right-0 rotate-[35deg] translate-x-[22rem]">

            </div>
            {/*  */}
            <div className="md:flex justify-between gap-x-3 container lg:max-w-[80rem] lg:w-[90%] md:w-[95%] w-[90%] mx-auto">
                {/* First Column */}
                <div className="pr-10 w-fit space-y-3 w-">
                    <div className="font-bold text-4xl">
                        <h1 className="">Different Faiths</h1>
                        <h1 className="">Common Goal.</h1>
                    </div>
                    <div className="text-slate-800 font-semibold text-xl pb-6">
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda sapiente vel odit officia error, autem nesciunt. Laudantium, molestiae hic.
                        </p>
                    </div>
                    <div className="">
                        <a href="/" className="bg-blue-500 py-3 px-5 text-white font-semibold rounded-full">Discover more</a>
                    </div>
                </div>
                {/* Right Column Image */}
                <div className="">
                    <ImageCard />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;