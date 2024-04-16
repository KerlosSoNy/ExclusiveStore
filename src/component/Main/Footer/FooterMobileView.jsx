import { AiFillCopyrightCircle } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

export default function FooterMobileView(){
    return(
        <div className="w-screen bg-black lg:hidden md:hidden flex flex-col relative">
            <div className="flex flex-col text-white container gap-6 mx-auto justify-evenly p-4 pt-14">
                {/* Exclusive */}
                <div className="flex flex-col gap-4 lg:w-[15%] md:w-[18%] w-full">
                    <h1 className="font-semibold text-3xl font-inter">Exclusive</h1>
                    <h1 className="font-semibold text-2xl font-inter">Subscribe</h1>
                    <h1 className="font-semibold text-1xl font-inter">Get 10% off your first order</h1>
                </div>
                {/* Support */}
                <div className="flex flex-col gap-4 lg:w-[15%] md:w-[18%] w-full relative">
                    <h1 className="font-semibold text-2xl font-inter ">Support</h1>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <a href="mailto:kerlosssony@gmail.com" className="break-words">kerlosssony@gmail.com</a>
                    <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
                </div>
                {/* Account */}
                <div className="flex flex-col gap-4 lg:w-[15%] md:w-[18%] w-full">
                    <h1 className="font-semibold text-2xl font-inter">Account</h1>
                    <Link>My Account</Link>
                    <Link>Login / Register</Link>
                    <Link>Cart</Link>
                    <Link>WishList</Link>
                    <Link>Shop</Link>
                </div>
                {/* Quick Link */}
                <div className="flex flex-col gap-4 lg:w-[15%] md:w-[18%] w-full">
                    <h1 className="font-semibold text-2xl font-inter">Quick Link</h1>
                    <Link>Privacy Policy</Link>
                    <Link>Terms Of Use</Link>
                    <Link>FAQ</Link>
                    <Link>Contact</Link>
                </div>
                {/* Downloand App */}
                <div className="flex flex-col gap-4 lg:w-[15%] md:w-[18%] w-full">
                    <h1 className="font-semibold text-2xl font-inter">Downloand App</h1>
                    <p>Save $3 with App New User Only</p>
                    <div className="flex flex-row lg:justify-around md:justify-between justify-between text-2xl text-center my-3">
                        <div className="flex flex-col justify-center border-[1px] border-[#3d3d3d] lg:p-2 md:p-1 p-1 rounded-lg w-[49%]">
                            <a href="/" className="mx-auto lg:text-2xl *:text-xl">
                                <BsGooglePlay />
                            </a>
                            <p className="lg:text-lg md:text-base text-base">Google Play</p>
                        </div>
                        <div className="flex flex-col justify-center border-[1px] border-[#3d3d3d] lg:p-2 md:p-1 p-1 rounded-lg w-[49%]">
                            <a href="/" className="mx-auto lg:text-2xl *:text-xl">
                                <IoLogoAppleAppstore />
                            </a>
                            <p className="lg:text-lg md:text-base text-base">App Store</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around text-2xl">
                        <a href="/">
                            <BiLogoFacebook />
                        </a>
                        <a href="/">
                            <AiOutlineTwitter />
                        </a>
                        <a href="/">
                            <AiOutlineInstagram />
                        </a>
                        <a href="/">
                            <BiLogoLinkedin />
                        </a>
                    </div>
                </div>
            </div>  
            <div className="flex flex-row w-screen text-[#3d3d3d] relative bottom-0 ">
                <div className="flex flex-row text-center w-screen justify-center p-4 border-t-2 border-[#3d3d3d]">
                    <div className="pt-[0.30rem]">
                        <AiFillCopyrightCircle/> 
                    </div>
                    <p> Copyright Kerlos Magdy 2024. All right reserved </p>
                </div>
            </div>
        </div>
    )
}