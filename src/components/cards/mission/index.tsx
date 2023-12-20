import { ReactNode } from "react";

interface cards {
    title: string,
    icon: ReactNode,
    text: string

}
const MissionCard = ({title, icon, text}: cards) => {
    return ( 
        <div className="bg-pink-900 hover:bg-blue-500 transition-all duration-300 shadow-lg pb-1 rounded-md">
            <div className="bg-white rounded-md p-6 space-y-2">
                <div className="text-4xl text-blue-500"> {icon} </div>
                <div className="">
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <div className="font-medium text-slate-600">
                    <p className="">{text}</p>
                </div>

            </div>
        </div>
     );
}
 
export default MissionCard;