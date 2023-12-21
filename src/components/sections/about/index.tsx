const About = () => {
    return ( 
        <div id="about" className="bg-slate-800 min-h-[100vh] portrait:min-h-[40rem] flex items-center py-8">
            <div className="container lg:max-w-[80rem] lg:w-[80%] md:w-[95%]  mx-auto space-y-8  md:space-y-0">
                {/* First Row */} 
                <div className="grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-8">
                    <div className="">
                        <img src="/laptop.png" alt="Laptop" className=" w-full object-cover rounded-t-3xl md:rounded-bl-[5rem] md:rounded-t-2xl h-[18rem] md:h-[25rem]" />
                    </div>
                    <div className="w-[90%] mx-auto">
                        <div className="space-y-1 md:space-y-2">
                            <h3 className="font-mono font-medium text-md italic text-green-500">Who We Are</h3>
                            <div className="md:pr-12 ">
                                <h1 className="text-2xl lg:text-3xl text-white md:text-2xl font-bold">Get ahead of th game with influencer marketing</h1>
                            </div>
                            <div className="pb-3 py-3 ">
                                <p className="text-slate-300 text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima cumque nulla, repellendus quia eveniet tempora maiores modi nihil, odio ipsum pariatur officia libero voluptates voluptatem quis natus, deserunt consequatur perspiciatis est veniam velit. Reiciendis adipisci ab vero impedit officiis et vitae, veritatis aperiam cum minima non sint consequuntur ut!
                                </p>
                            </div>
                            <div className="">
                                <button className="text-slate-100 font-semibold cursor-pointer bg-blue-500 hover:bg-opacity-90 transition-all duration-300 px-4 py-2 rounded-full">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     ); 
}
 
export default About;