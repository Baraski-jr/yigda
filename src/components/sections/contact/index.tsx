import { useState } from "react";
import { FaLocationArrow, FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }

    return ( 
        <div className="md:min-h-[100vh] portrait:min-h-[40rem] flex items-center">
            <div className="container lg:max-w-[80rem] lg:w-[80%] mx-auto space-y-8  md:space-y-8">

                <div className="md:flex md:space-x-10">
                    {/* Left Column */}
                    <div className="w-[90%] mx-auto md:w-[50%] space-y-4">
                        <div className="space-y-2">
                            <h3 className="font-mono font-medium text-md italic text-green-500">Contact Detail</h3>
                            <div className="pr-12 ">
                                <h1 className="text-3xl font-bold">We'd love to hear from you</h1>
                            </div>
                            <p className="text-slate-500 text-sm">Lorem, ipsum dolor sit amet Officia illum, quod maxime sit, harum vero tempore dicta inventore, necessitatibus saepe nulla sint.</p>
                        </div>
                        <div className="">
                            <div className="py-2 flex space-x-2">
                                <div className="text-2xl text-blue-500"><FaLocationArrow /></div>
                                <div className="space-y-1">
                                    <h3 className="font-bold">Address</h3>
                                    <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sequi!</p>
                                </div>
                            </div>
                            <div className="py-2 flex space-x-2 border-y-2 ">
                                <div className="text-2xl text-blue-500"><MdAlternateEmail /></div>
                                <div className="space-y-1">
                                    <h3 className="font-bold">Mail Address</h3>
                                    <div className="">
                                        <a className="block text-sm font-medium text-slate-600" href="mailto:yigda@gmail.com">yigda@gmail.com</a>
                                        <a className="block text-sm font-medium text-slate-600" href="mailto:yigda@gmail.com">support@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 flex space-x-2">
                                <div className="text-2xl text-blue-500"><FaPhoneVolume /></div>
                                <div className="space-y-1">
                                    <h3 className="font-bold">Phone</h3>
                                    <div className="">
                                        <a className="block text-sm font-semibold text-slate-600" href="tel:+220 000 0000">+220 000 0000</a>
                                        <a className="block text-sm font-semibold text-slate-600" href="tel:+220 000 0000">+220 000 0000</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="shadow-xl rounded-md shadow-slate-400 p-8 md:w-[80%] w-[90%] mx-auto space-y-4">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold">Send us a Message</h1>
                            <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet, aliqua, aliquam.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-1">
                            {/* First Row */}
                            <div className="flex justify-between space-x-3">
                                <div className="w-full">
                                    <label htmlFor="name" className="font-semibold block pb-1">Name</label>
                                    <input className="border rounded-md px-2 py-1 focus:outline-none w-full" type="text" name="name" id="" placeholder="Omar ..." value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="font-semibold block pb-1">Phone</label>
                                    <input className="border px-2 py-1 rounded-md focus:outline-none w-full" type="number" name="number" id="" placeholder="+220 222 2222"  value={phone} onChange={e => setPhone(e.target.value)}/>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="email" className="font-semibold pb-1">Email</label>
                                <input className="w-full border px-2 py-1 rounded-md focus:outline-none" type="email" name="email" id="" placeholder="Yigda@gmail.com"  value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            {/* Send Email */}
                            <div className="">
                                <label htmlFor="subject" className="font-semibold pb-1">Subject</label>
                                <input className="w-full border px-2 py-1 rounded-md focus:outline-none" type="text" name="subject" id="" placeholder="want to join" />
                            </div>
                            <div className="">
                                <label htmlFor="message" className="font-semibold pb-1">Message</label>
                                <textarea className="border px-2 rounded-md w-full focus:outline-none" rows={3} placeholder="I want ...." value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="">
                                <button type="submit" className="rounded-full text-white font-semibold py-2 bg-slate-500 w-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15524.536895336742!2d-16.7116703!3d13.4040146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgm!4v1702937361970!5m2!1sen!2sgm"
                    height="350" 
                    className="border-none w-full" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div> */}
            </div>
        </div>
     );
}
 
export default Contact;