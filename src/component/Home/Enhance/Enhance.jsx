import Header from "../MainComponent/header";
import { Link } from "react-router-dom";


export default function Enhance(){
    return(
        <div className="container 
            mx-auto lg:my-10 lg:mt-32 
            md:my-10 md:mt-20
            my-3 mt-4
            relative
            lg:h-[500px] md:h-[350px] h-[250px]
        "
        >
            <div className="z-40 relative lg:p-20 md:p-6 p-1 ps-4">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <Header name={'Electronics'}/>
                        <h4 className="text-white lg:w-96 md:w-96 w-52  lg:text-5xl md:text-3xl text-2xl mt-3"> 
                            Enhance Your Music Experience
                        </h4>
                    </div>

                </div>
            </div>
            <div className="z-30 absolute bottom-4 md:bottom-9 lg:bottom-14
             left-10 lg:left-48 md:left-28
             ">
                        <Link to='/products/electronics' className="bg-red-500 
                        lg:px-10 md:px-4 px-4 
                        lg:py-3 md:py-2 py-1
                        rounded-md 
                        lg:w-40 md:w-36 w-10">View All</Link>
            </div>
            <img src="https://wallpaperset.com/w/full/b/6/9/154123.jpg" className="lg:h-[500px] md:h-[350px] h-[250px] w-full absolute z-0 top-0" alt="" />
        </div>
    )
}