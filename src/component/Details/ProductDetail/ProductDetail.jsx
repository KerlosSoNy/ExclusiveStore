import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { increaseCount } from "../../../store/Slices/cart";
import { AddToWichList } from "../../../store/Slices/WhichList";
import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetail(){
    const param = useParams()
    let [item,setItem] = useState()
    let [productC , setProductC] = useState(1)
    let disp = useDispatch()
    let Notify2 = () => {
        toast.error("Success Added To WichList !");
    };
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${param.id}`).then(res=> setItem(res.data))
        
    },[param])
    
    return(
        <div className="container 
        mx-auto lg:my-10 lg:mt-32 
        md:my-10 md:mt-20
        my-3 mt-20
        pb-10">
            <div className=" absolute">
                <ToastContainer />
            </div>
                {item !== undefined ? 
                <div className="flex lg:flex-row md:flex-row flex-col gap-20 justify-center">
                    <div className="my-auto mx-auto">
                        <img src={item.image} alt="" className="w-[350px] lg:w-[500px] md:w-[350px]
                        h-[400px] lg:h-[600px] md:h-[450px]
                        "/>
                    </div>
                    <div className="flex flex-col lg:w-[40%] md:w-[70%] w-[100%] ">
                        <div className="flex flex-col border-b-2 p-6">
                                <h2
                                className="
                                text-3xl
                                my-2
                                font-semibold
                                "
                                >{item.title}</h2>
                                { 
                                    <h1 className="flex flex-row text-xl">
                                        Rate : {item.rating.rate}
                                    </h1>
                                }
                                <span className="font-semibold text-2xl my-2">
                                    ${item.price}
                                </span>
                                <p>
                                    {item.description}
                                </p>
                        </div>
                        <div className="p-6 flex flex-col gap-5">
                                <div className="flex flex-row gap-1 text-2xl flex-wrap">
                                    <span>
                                        Category : 
                                    </span>
                                    <p>
                                        {item.category}
                                    </p>
                                </div>
                                <div className="flex lg:flex-row md:flex-col flex-col gap-5 justify-center mt-4">
                                    <div className="mx-auto">
                                        <button className=" px-[15px] py-[6px] text-2xl border-2 border-gray-400 rounded-l-lg"
                                        onClick={()=> 
                                            productC > 1 && setProductC(productC -1)

                                        }>
                                                -
                                        </button> 
                                        <span className="px-[40px] py-[6px] text-2xl border-2 border-l-0 border-r-0 border-gray-400">
                                                {productC}
                                        </span>
                                        <button className="bg-red-500 px-[15px] py-[6px] text-white text-2xl border-2 border-red-600 rounded-r-lg"
                                        onClick={()=> {
                                            setProductC(productC +1)
                                        }}>
                                                +
                                        </button>
                                    </div>
                                    <div className="mx-auto">
                                        <button className="w-[165px] py-[11px] bg-red-500 rounded" onClick={()=>disp(increaseCount({product:item, count : productC}))}>
                                            Buy Now
                                        </button>
                                    </div>
                                    <div className="mx-auto">
                                        <button className="px-[7px] py-[6px] border-gray-400 border-2 rounded"  onClick={()=> disp(AddToWichList(item))}>
                                            <CiHeart className="text-3xl " onClick={Notify2}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col border-2 border-gray-400 mt-5">
                                    <div className="flex flex-row gap-8 p-10 border-b-2 border-gray-400">
                                        <div>
                                            <TbTruckDelivery className="text-5xl"/>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2>Free Delivery</h2>
                                            <span>Enter your postal code for Delivery Availability</span>
                                        </div>
                                    </div>  
                                    <div className="flex flex-row gap-8 p-10">
                                        <div>
                                        <TfiReload className="text-5xl"/>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2>Return Delivery</h2>
                                            <span>Free 30 Days Delivery Returns. Details</span>
                                        </div>
                                    </div>  
                                </div>
                        </div>
                    </div>
                </div>:
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto my-28">
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
    )
}