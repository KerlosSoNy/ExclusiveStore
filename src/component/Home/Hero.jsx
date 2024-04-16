import axios from "axios";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Hero(){
    const [links , setLinks] = useState({})
    const [link] = useSelector(state => state.Cate)
    
    useEffect(()=>{
        setLinks(link)
    },[link])

    return(
        <div className="grid grid-cols-4 container mx-auto my-10">
            <div className="hidden flex-col justify-center gap-10 border-r-2 me-20 md:me-10 lg:ps-20 md:ps-0 ps-0 md:flex lg:flex">
                    {
                    Array.isArray(links)
                    && links.slice(0,5).map((e)=>{
                        return(
                            <div className="flex flex-row ">
                                <Link to={`/products/${e}`} className="font-semibold">
                                    {e.toUpperCase()}
                                </Link> 
                                <div className=" ms-1 text-xl pt-[0.25rem]">
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-96 sm:h-52 xl:h-80 2xl:h-96 object-contain container mx-auto lg:my-10 md:my-10 mt-[-40px] border-0 lg:col-span-3 md:col-span-3 col-span-4">
                <Carousel>
                <img src="https://wallpaperaccess.com/full/5894380.jpg" alt="..."  className=" h-96 sm:h-52 xl:h-80 2xl:h-96"/>
                <img src="https://marketplace.canva.com/EAF1maxO6zE/1/0/1600w/canva-brown-productivity-desktop-wallpaper-UfKuV62vvWE.jpg" alt="..."  className=" h-96 sm:h-52 xl:h-80 2xl:h-96"/>
                <img src="https://c0.wallpaperflare.com/preview/583/859/760/flat-lay-photography-of-silver-apple-products.jpg" alt="..."  className=" h-96 sm:h-52 xl:h-80 2xl:h-96"/>
                </Carousel>
            </div>
        </div>
    )
}