import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { IoFilter } from "react-icons/io5";
import { useState } from "react";


export default function AllProducts(){
    const [products] = useSelector(state=> state.products)
    const [category] = useSelector(state=>state.Cate)
    const [cate ,setCategory] = useState('All')
    const [filters , setFilters] = useState(false)
    let newCate = [];
    if(Array.isArray(category) && category.length > 0) newCate = [...category , "All"];
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
                <div className="flex flex-row gap-5 justify-between">
                    <div className="flex flex-row gap-5">
                        <Link to='/' className="text-gray-400 text-xl">Home</Link>
                        <span className="text-gray-400 text-xl">/</span>
                        <Link to='/products' className="text-xl">Products</Link>
                    </div>
                    <div className="text-2xl my-auto relative">
                            <IoFilter onClick={()=>setFilters(!filters)}/>
                    </div>
                </div>
                <div className="flex justify-end">
                    {
                                filters && 
                                <div className="relative">
                                    <select name="category"
                                    className="block py-2.5 px-5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    id="cars" onChange={(e)=>setCategory(e.currentTarget.value)}>
                                        <option value="All" selected disabled>Category</option>
                                        {
                                    Array.isArray(newCate) && newCate.length > 0 &&
                                    newCate.map((e)=>{
                                        return(
                                            <option className="ms-4 my-2" value={e} onClick={(e)=>{
                                                setCategory(e.currentTarget.value)}
                                            }>{e}</option>
                                        )
                                    })} 
                                    </select>
                                </div>
                    }
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto">
                    {
                        Array.isArray(products) && products.length > 0 ? 
                        products.map((e)=>{
                            if(e.category === cate){
                                return(
                                    <Link to={`/product/${e.id}`} class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                                        <img src={e.image} alt="Jacket" className="w-[280px] h-[291px]"/>
                                        <div
                                            class="absolute shadow-lg  z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                            <div class="flex items-center justify-between mb-2">
                                                <h6 class="font-semibold text-base leading-7 text-black ">{e.title.slice(0,20)}</h6>
                                                <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">${e.price}</h6>
                                            </div>
                                            <p class="text-xs leading-5 text-gray-500">{e.category.toUpperCase()}</p>
                                        </div>
                                    </Link>
                            )}else if(cate === "All"){
                                return(
                                    <Link to={`/product/${e.id}`} class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                                        <img src={e.image} alt="Jacket" className="w-[280px] h-[291px]"/>
                                        <div
                                            class="absolute shadow-lg  z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                            <div class="flex items-center justify-between mb-2">
                                                <h6 class="font-semibold text-base leading-7 text-black ">{e.title.slice(0,20)}</h6>
                                                <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">${e.price}</h6>
                                            </div>
                                            <p class="text-xs leading-5 text-gray-500">{e.category.toUpperCase()}</p>
                                        </div>
                                    </Link>           
                            )}
                        }) : 
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
        </div>
    )
}