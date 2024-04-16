import { useState } from "react"
import { Link } from "react-router-dom";
import SearchDiv from "./Search/SearchDiv";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { FiMenu } from "react-icons/fi";
export default function MobileViewNav(){
    const [menu , setMenu] = useState(false)
    const Cart = useSelector(state=> state.Cart)
    const wichList = useSelector(state=> state.WichList)
    var cartCounter  = 0;
    Cart !== undefined && Cart.map((e)=>{
        return cartCounter = e.count + cartCounter;
    })
    return(
        <div className="lg:hidden md:hidden block border-b-2 pb-8">
            {/* Discount Nav */}
            <div className="w-screen h-[70px] bg-black text-center text-white">
                <p className="pt-3">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! ShopNow</p>
            </div>
            {/* Main Nav */}
            <div className="h-[25px] container mx-auto flex flex-row justify-between mt-4 relative">
                <Link to='/' className="font-semibold text-2xl font-inter ms-4">Exclusive</Link>
                <FiMenu className="me-4 mt-1 font-semibold text-3xl font-inter" onClick={()=> {
                    setMenu(!menu)
                    }}/>
                    {
                    menu && 
                    <div className="absolute bg-white z-50  top-[58px] w-full pb-5">
                        <div className="flex flex-col gap-10 p-5">
                            <Link to='/home' className="Links_over">Home</Link>
                            <Link className="Links_over" to='/contact'>Contact</Link>
                            <Link className="Links_over" to='/about'>About</Link>
                            <Link className="Links_over" to='/signUp'>SignUp</Link>
                        </div>
                        <div className="text-black relative  flex flex-col gap-5">
                            <div className=" flex flex-row w-full px-3">
                                <SearchDiv/>
                                <div className="bg-[#f5f5f5] text-3xl p-1 px-2 rounded-r-lg">
                                    <AiOutlineSearch />
                                </div>
                            </div>
                            <div className="text-3xl flex flex-row justify-center gap-20 pt-1">
                                <Link to='/wishlist'>
                                    <div className="relative">
                                        <AiFillHeart className={`${wichList.length > 0 ?"text-red-500 ":"text-black"}`}/>
                                        <div className=" text-white">
                                            <span className="bg-red-500 rounded-full px-2 text-base  absolute top-[-12px] right-[-13px]">
                                                {wichList.length}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/cart'>
                                    <div className="relative">
                                        <div className="relative">
                                            <AiOutlineShoppingCart />
                                        </div>
                                        <div className=" text-white">
                                            <span className="bg-red-500 rounded-full px-2 text-base  absolute top-[-12px] right-[-13px]">
                                                {cartCounter}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    }
            </div>
        </div>
    )
}