import { FaComputer, FaRobot } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoTerminal } from "react-icons/io5";
import MissionCard from "../../cards/mission";
import ImageCard1 from "../../cards/image1";

const Activities = () => {
    return ( 
        <div className="c-rounded bg-white flex items-center min-h-[100vh] portrait:min-h-[40rem]">    
            <div className="container lg:max-w-[80rem] lg:w-[80%] md:w-[95%] w-[90%] mx-auto">
                <div className="grid lg:grid-cols-2 space-y-4 md:space-y-0">
                    {/* First Column */}
                    <div className="md:w-[90%]">
                        <div className="space-y-1 grid gap-y-2">
                            <div className="">
                                <h3 className="font-mono font-medium text-md italic text-green-500">Our Mission</h3>
                            </div>
                            <div className="md:pr-8">
                                <h1 className="text-2xl lg:text-3xl md:text-2xl font-bold">Get ahead of th game with influencer</h1>
                            </div>
                            <div className="pb-8">
                                <p className="text-slate-500 text-md">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores voluptate explicabo eum, ex quisquam.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <ImageCard1 />
                            </div>
                        </div>
                    </div>
                    {/* Second Column */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <MissionCard title={"Hackathon"} icon={<FaComputer />} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque!..."} />
                        <MissionCard title={"Robotic"} icon={<FaRobot />} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque!..."} />
                        <MissionCard title={"Drone"} icon={<GiDeliveryDrone />} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque!..."} />
                        <MissionCard title={"I.O.T"} icon={<IoTerminal />} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, atque!..."} />
                    </div>
                </div>
        </div>
        </div>
     );
}

export default Activities;