import Header from "../MainComponent/header";
import { Link } from "react-router-dom";
import ProductsSlider from "../Today/Slide";

export default function ThisMonth(){
    return(
        <div className="container 
            mx-auto lg:my-10 lg:mt-20 
            md:my-10 md:mt-20
            my-0 mt-4
        "
        >
            <div className="flex flex-col gap-5 px-4 ">
                <Header name={'This Month'}/>
            </div>
            <div className="flex flex-row items-center justify-between px-4 ">
                    <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold pb-3 ps-4 w-full">Best Selling Products</h1>
                    <Link to='/products' className="bg-red-500 lg:px-10 md:px-8 ps-5 py-3 rounded-md mt-3 lg:w-40 md:w-40 w-32 ">View All</Link>
            </div>
            <div className="">
                <ProductsSlider start={0} end={4}/>
            </div>
        </div>
    )
}