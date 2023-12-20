import { FaComputer, FaRobot } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoTerminal } from "react-icons/io5";
import MissionCard from "../../cards/mission";

const Activities5 = () => {
    return ( 
        <div className="c-rounded bg-slate-100 flex items-center h-[100vh] max-h-[40rem]">    
            <div className="container lg:max-w-[80rem] lg:w-[80%] md:w-[95%] w-[90%] mx-auto bg-[x]">
                <div className="grid lg:grid-cols-2 space-y-4 md:space-y-0">
                    {/* First Column */}
                    <div className="md:w-[90%]">
                        <div className="space-y-1 md:space-y-2">
                            <h3 className="font-mono font-medium text-md italic text-green-500">What We Offer</h3>
                            <div className="md:pr-8">
                                <h1 className="text-2xl lg:text-3xl md:text-2xl font-bold">Get ahead of th game with influencer</h1>
                            </div>
                            <div className="pb-3 py-3">
                                <p className="text-slate-500 text-md">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores voluptate explicabo eum, ex quisquam.
                                </p>
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

export default Activities5;