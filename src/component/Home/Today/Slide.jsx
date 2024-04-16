import { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { increaseCount } from "../../../store/Slices/cart";
import { ToastContainer, toast } from 'react-toastify';
import { AddToWichList } from "../../../store/Slices/WhichList";
export default function ProductsSlider(props){
    const [flitered, setFilter] = useState() 
    const [products] = useSelector(store => store.products)

    let Notify = () => {
        toast.success("Success Added To Cart !");
    };
    let Notify2 = () => {
        toast.success("Success Added To WichList !");
    };
    const dis = useDispatch()
    useEffect(()=>{
        Array.isArray(products) && setFilter(products)
    },[products])
    // ${heart?"text-red-500": "text-black"}
return(
        <div className="overscroll-x-scroll gap-10 px-4 container my-10 border-0 lg:col-span-3 md:col-span-3 col-span-4 mx-auto">
            <div className=" absolute">
                <ToastContainer />
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-8 mx-4 w-full justify-center justify-items-center">
                {
                    Array.isArray(flitered) ? flitered.slice(props.start,props.end).map((e)=>{
                        return(
                            <Link to={`/product/${e.id}`} class="relative bg-cover group rounded-3xl bg-center overflow-hidden sm:mr-0 xl:mx-auto cursor-pointer">
                                        <img src={e.image} alt="Jacket" className="lg:w-[280px] md:w-[280px]  md:h-[291px] lg:h-[291px] h-[150px] w-[140px]"/>
                                        <div
                                            class="lg:absolute md:absolute relative shadow-lg me-4 lg:me-0 md:me-0 p-2 z-10 bottom-3 left-0 bg-white lg:w-[calc(100%-x24p)] md:w-[calc(100%)] w-92 rounded-xl transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                                <h6 class="font-semibold text-base leading-7 text-black break-words ">{e.title.slice(0,20)}</h6>
                                            <div class="flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center items-start justify-between mb-2">
                                                <p class="text-xs leading-5 text-gray-500">{e.category.toUpperCase()}</p>
                                                <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">${e.price}</h6>
                                            </div>
                                            
                                        </div>
                                </Link>   
                        )
                    }):
                    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                            <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}