import { useEffect, useState } from "react";
import Header from "../MainComponent/header";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function Category(){
    const [links , setLinks] = useState({})
    const [link] = useSelector(state=> state.Cate)

    useEffect(()=>{
        setLinks(link)
    },[link])
    return(
        <div className="container 
            mx-auto lg:my-10 lg:mt-20 
            md:my-10 md:mt-20
            my-0 mt-4
            border-b-2
            pb-10
            relative
        "
        >
            <div className="flex flex-col gap-5  px-4">
                <Header name={'Category'}/>
                <div className="flex flex-row items-center justify-between px-4 ">
                        <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold pb-3">Browse By Category</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 overscroll-x-scroll gap-10 px-4 container my-10 border-0 lg:col-span-3 md:col-span-3 col-span-4 mx-auto">
                {
                    Array.isArray(links) ? links.slice(0,5).map((cate)=>{
                        return(
                            <Link to={`/products/${cate}`} key={cate.id} className="group relative justify-center text-white">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% lg:aspect-none  lg:h-80 md:h-520 h-40 relative ">
                                    <div className="top-0 Links_over absolute aspect-h-1 aspect-w-1 w-full h-full flex flex-row justify-center overflow-hidden rounded-md bg-gradient-to-r from-indigo-500  from-30% via-purple-500 via-50%  to-pink-500 to-90% lg:aspect-none  lg:h-80">
                                        <div className="flex flex-col justify-center text-center">
                                            <h1 className="font-semibold lg:text-4xl md:text-xl text-base">{cate.toUpperCase()}</h1>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/products/${cate}`}>
                                    <div className="hover:opacity-100  opacity-0 top-0 Links_over absolute aspect-h-1 aspect-w-1 w-full h-full flex flex-row justify-center overflow-hidden rounded-md bg-gradient-to-r from-indigo-500 from-30% via-purple-500 via-70% to-pink-500 to-90% lg:aspect-none  lg:h-80">
                                        <div className="flex flex-col justify-center text-center">
                                            <h1 className="font-semibold lg:text-4xl md:text-xl text-base">See More...</h1>
                                        </div>
                                    </div>
                                </Link>
                            </Link>
                        )
                    }):
                    <div class="text-center w-full">
                        <div role="status">
                            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                }
        </div>
            </div>
        </div>
    )
}