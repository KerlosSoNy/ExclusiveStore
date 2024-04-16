import { useState } from "react";
import { Link } from "react-router-dom";


export default function SearchList({result}){
    let [isOpen , setOpen] = useState(true)
    window.addEventListener("click", function(e) {
        isOpen && setOpen(!isOpen)
    });
    return(
        <div>
            {isOpen && 
            <div className="text-black absolute z-30 flex flex-col gap-3 h-52 overflow-y-scroll mt-5 bg-white p-3 border-2 rounded-lg" >
                {result.map((e)=>{
                    return(
                        <div>
                            <Link to={`/product/${e.id}`} onClick={()=> setOpen(!isOpen)}>{e.title}</Link>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}