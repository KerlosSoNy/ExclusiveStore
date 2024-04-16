import Header from "../MainComponent/header";
import { Link } from "react-router-dom";
import ProductsSlider from "../Today/Slide";


export default function OurProduct(){
    return(
        <div className="container 
        mx-auto lg:my-10 lg:mt-32 
        md:my-10 md:mt-20
        my-3 mt-20
        border-b-2
        pb-10">
            <div className="px-4">
                <Header name={"Our Products"}/>
            </div>
            <div className="flex flex-row items-center justify-between px-4 ">
                    <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold pb-3 ps-4 w-full">Explore Our Products</h1>
            </div>
            <ProductsSlider start={10} end={20}/>
        </div>
    )
}