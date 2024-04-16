import { Link } from "react-router-dom"
import Banners from "./Banners"
import Leaders from "./Leaders"
import Logos from "./Logo"

export default function About(){
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
                    <Link to='/about' className="text-xl">About</Link>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row mt-10 justify-around">
                    <div className="flex flex-col w-[100%] lg:w-[40%] md:w-[55%] gap-2 my-auto pb-5 lg:pb-0 md:pb-0">
                        <h1 className="mb-10 lg:mb-10 md:mb-4 text-3xl lg:text-6xl md:text-5xl">Our Story</h1> 
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className="block md:hidden lg:block">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="flex flex-col w-[100%] lg:w-[40%] md:w-[45%] gap-4 my-auto lg:ms-4 md:ms-4 ms-0">
                        <img src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=" alt="" className=" object-contain" />
                    </div>
                </div>
                <Banners/>
                <Leaders/>
                <Logos/>
            </div>
        </div>
    )
}