import { Link , useNavigate} from "react-router-dom"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact(){
    const form = useRef();
    const navi = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_k5k0v2d', 'template_h2dc16j', form.current, {
            publicKey: 'fGZs68aVs0lu5F4EL',
        })
        .then(()=>navi('/'));
    };
    return(
        <div className="container 
        mx-auto lg:my-10 lg:mt-20 
        md:my-10 md:mt-20
        my-0 mt-4
        pb-10
        px-4 *:px-0
        "
        >
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-5">
                    <Link to='/' className="text-gray-400 text-xl">Home</Link>
                    <span className="text-gray-400 text-xl">/</span>
                    <Link to='/contact' className="text-xl">Contact Us</Link>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-col justify-around h-full ">
                    <div className="rounded-md border-2 border-gray- p-5">
                        <div className="border-b-2 pb-5 flex flex-col gap-5">
                            <div className="flex flex-row">
                                <IoCall className="bg-red-500 text-white rounded-full p-3 text-7xl"/>
                                <h1 className="text-3xl my-auto ms-4 font-semibold">Call To Us</h1>
                            </div>
                                <h2>We are available 24/7, 7 days a week.</h2>
                                <h2>Phone: +8801611112222</h2>
                        </div>
                        <div className="pt-5 flex flex-col gap-5">
                            <div className="flex flex-row">
                                <MdEmail className="bg-red-500 text-white rounded-full p-3 text-7xl"/>
                                <h1 className="text-3xl my-auto ms-4 font-semibold">Write To US</h1>
                            </div>
                                <h2>Fill out our form and we will contact you within 24 hours.</h2>
                                <h2>Emails: customer@exclusive.com</h2>
                                <h2>Emails: support@exclusive.com</h2>
                        </div>
                    </div>
                    <div className="lg:w-[54%] md:w-[100%] w-[100%] mt-10  my-auto h-full">
                    <form ref={form} action="" className="flex-col gap-3 text-gray-400  lg:my-12 md:my-12 my-8 flex" onSubmit={sendEmail}>
                        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-20 md:gap-4 gap-4">
                            <div className="flex flex-col w-[100%] md:w-[32%] lg:w-[30%]">
                                <label>Name</label>
                                <input type="text" name="user_name"  className="border-0 bg-gray-200  shadow-md" required/>       
                            </div>
                            <div className="flex flex-col w-[100%] md:w-[32%] lg:w-[30%]">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="user_email" id="email" className="border-0 bg-gray-200  shadow-md"required/>
                            </div>
                            <div className="flex flex-col w-[100%] md:w-[32%] lg:w-[30%]">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" id="phone" className="border-0 bg-gray-200  shadow-md" required/>
                            </div> 
                        </div>
                        <div className="flex flex-col  h-[120px]">
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message" className="border-0 bg-gray-200 w-full shadow-md h-[90%]" name="message" required/>
                        </div>
                            <input type="submit" value="Send Message" 
                            className="bg-red-500 text-white
                            lg:px-7 md:px-4 px-4 
                            lg:py-3 md:py-2 py-1
                            mt-10
                            rounded-md 
                            mx-auto
                            lg:w-40 md:w-36 w-36 hover:cursor-pointer" 
                            />

                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}