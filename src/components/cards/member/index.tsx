import { FaHtml5, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const MemberCard = () => {
    return ( 
        <div className="">
            <figure className="rounded-md shadow-md">
                <div className="">
                    <img src="/laptop.png" alt="laptop" className="object-cover max-h-[15rem] w-full rounded-t-md" />
                </div>
                <figcaption className="shadow-slate-500 rounded-b-md border py-3 px-3">
                    {/* First Row */}
                    <div className="border-slate-500 pb-3  border-b flex flex-col items-center justify-center">
                        <div className="font-bold text-2xl">
                            <h3 className="">Omar <span className="text-blue-500"> Barra</span> </h3>
                        </div>
                        <div className="font-semibold text-lg">
                            <h3 className="">Frontend Developer</h3>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="flex justify-between gap-x-3 pt-3">
                        <div className="flex flex-col items-center justify-center ">
                            <div className="text-2xl text-blue-500">
                                <FaReact />
                            </div>
                            <div className="">
                                <h3 className="">React</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center ">
                            <div className="text-2xl text-blue-500">
                                <FaHtml5 />
                            </div>
                            <div className="">
                                <h3 className="">Html</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center ">
                            <div className="text-2xl text-blue-500">
                                <SiTailwindcss  />
                            </div>
                            <div className="">
                                <h3 className="">Tailwind</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center ">
                            <div className="text-2xl text-blue-500">
                                <SiTailwindcss  />
                            </div>
                            <div className="">
                                <h3 className="">Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
     );
}
 
export default MemberCard;