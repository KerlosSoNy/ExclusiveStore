import Header from "../MainComponent/header";
import ProductsSlider from "./Slide";
import Timer3 from "./Timer";
import { Link } from "react-router-dom";


export default function TodayOffers(){
    return(
        <div className="container 
            mx-auto lg:my-10 lg:mt-20 
            md:my-10 md:mt-20
            my-0 mt-4
            border-b-2
            pb-10
        "
        >
            <div className="flex flex-col gap-5 px-4 ">
                <Header name={'Today`s'}/>
            </div>
            <div className="flex flex-row items-center justify-between px-4 ">
                    <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold pb-3 ps-4">Flash Sales</h1>
                    <Timer3/>
            </div>
            <div className="">
                <ProductsSlider start={4} end={9}/>
            </div>
            <div className="text-white w-full flex flex-row justify-center">
                <Link to='/products' className="bg-red-500 px-10 py-3 rounded-md mt-3">View All Products</Link>
            </div>
        </div>
    )
}