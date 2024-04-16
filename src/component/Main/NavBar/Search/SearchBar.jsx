import { useEffect, useState } from "react"


export default function SearchBar({ setResults }){
    const [ searchValue , setSearchValue] = useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(response => response.json()).then(data => {
            const filters = data.filter(e=>{
                return searchValue && e && e.title && e.title.toLowerCase().includes(searchValue)
            })
            setResults(filters)
        })
    },[searchValue])
    return(
        <div className="">
            <input type="search" placeholder="What are you looking for" id="" onChange={(e)=> setSearchValue(e.currentTarget.value)} className="h-[38px] lg:w-[243px] md:w-[190px] w-full bg-[#f5f5f5] p-1 px-2 rounded-l-lg"/>
        </div>
    )
}