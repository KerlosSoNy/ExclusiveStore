import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ClearCart } from "../../../../store/Slices/cart";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
export default function CashOut(){
    const cart = useSelector(state=> state.Cart)
    const form = useRef();
    const navi = useNavigate();
    const disp = useNavigate();

    const [cash ,setCash]= useState(false)
    let totalPayment = 0;
    cart !== undefined && cart.map((e)=>{
        return totalPayment = (e.count * e.product.price) + totalPayment;
    })

    let Notify = () => {
        toast.error("Check Cash Method");
    };

    const sendEmail = (e) => {
        e.preventDefault();
        disp(ClearCart())
        emailjs
        .sendForm('service_k5k0v2d', 'template_b8hjvwy', form.current, {
            publicKey: 'fGZs68aVs0lu5F4EL',
        })
        .then(()=>navi('/'));
    };
    
    return(
        <div className="container 
        mx-auto lg:my-10 lg:mt-20 
        md:my-10 md:mt-20
        my-0 mt-4
        pb-10
        px-4 *:px-0
        "
        >
            <div className=" absolute">
                <ToastContainer />
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-5">
                    <Link to='/' className="text-gray-400 text-xl">Home</Link>
                    <span className="text-gray-400 text-xl">/</span>
                    <Link to='/cart' className="text-xl text-gray-400">Cart</Link>
                    <span className="text-gray-400 text-xl">/</span>
                    <Link to='/cart/cashout' className="text-xl">Cash Out</Link>
                </div>
            </div>
            <div className="h-fit flex lg:flex-row md:flex-row flex-col w-full justify-around mt-10">
                <div className="lg:w-[40%] md:w-[40%] w-[100%]">
                    <form ref={form} action="" className="flex-col gap-3 text-gray-400  lg:mb-0 md:mb-0 mb-10 lg:flex md:flex hidden" onSubmit={sendEmail}>
                        <div className="flex flex-col gap-2">
                        <label>Name</label>
                        <input type="text" name="user_name"  className="border-0 bg-gray-200  shadow-md" required/>       
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="user_email" id="email" className="border-0 bg-gray-200  shadow-md"required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="apartment">Address, floor, Street ,etc. (optional)</label>
                            <input type="text" id="apartment" className="border-0 bg-gray-200  shadow-md" name="message" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="number" id="phone" className="border-0 bg-gray-200  shadow-md" required/>
                        </div> 
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" id=""  className="mt-1 bg-red-400"/>
                            <span>Save this information for faster check-out next time</span>
                        </div>
                        {
                            cash ?
                            <input type="submit" value="Place Order" 
                            className="bg-red-500 text-white
                            lg:px-9 md:px-4 px-4 
                            lg:py-3 md:py-2 py-1
                            rounded-md 
                            mx-auto
                            lg:w-40 md:w-28 w-28 hover:cursor-pointer" 
                            />
                            :
                                <input type="" value="Place Order" 
                                className="bg-gray-500 text-white
                                lg:px-9 md:px-4 px-4 
                                lg:py-3 md:py-2 py-1
                                rounded-md 
                                mx-auto
                                lg:w-40 md:w-28 w-28 hover:cursor-pointer" 
                                onClick={Notify}/>
                        }
                    </form>
                </div>
                <div className="flex flex-col lg:w-[40%] md:w-[50%] w-[100%] border-2 lg:border-black md:border-black border-gray-200 rounded-lg p-5 gap-5 h-fit">
                    <h1 className="text-2xl font-semibold">Cart Total</h1>
                    <div className="flex flex-col">
                        {
                            Array.isArray(cart) && cart.length > 0 && cart.map((e)=>{
                                return(
                                    <div className="flex lg:flex-row md:flex-row flex-col gap-3 justify-between mb-5">
                                        <img src={e.product.image} alt="" className="w-[54px] h-[54px] object-contain"/>
                                        <Link to={`/product/${e.product.id}`}>{e.product.title.slice(0,32)}..</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-row justify-between border-b-2 border-gray-400 pb-3">
                        <span>Subtotal:</span>
                        <span>$ {totalPayment}</span>
                    </div>
                    <div className="flex flex-row justify-between border-b-2 border-gray-400 pb-3">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className="flex flex-row justify-between pb-3">
                        <span>Total:</span>
                        <span>$ {totalPayment}</span>
                    </div>
                    <div className="flex flex-row gap-2">
                            <input type="checkbox" name="checkbox" id=""  className="mt-1 rounded-full"/>
                            <span>Bank</span>
                    </div>
                    <div className="flex flex-row gap-2">
                            <input type="checkbox" name="checkbox" id=""  className="mt-1 rounded-full" onClick={()=> setCash(!cash)}/>
                            <span>Cash On delivery</span>
                    </div>
                </div>
                <form ref={form} action="" className="flex lg:hidden md:hidden flex-col gap-3 text-gray- mt-10  lg:mb-0 md:mb-0 mb-10" onSubmit={sendEmail}>
                        <div className="flex flex-col gap-2">
                        <label>Name</label>
                        <input type="text" name="user_name"  className="border-0 bg-gray-200  shadow-md" required/>       
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="user_email" id="email" className="border-0 bg-gray-200  shadow-md" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="apartment">Address, floor, Street ,etc. (optional)</label>
                            <input type="text" id="apartment" className="border-0 bg-gray-200  shadow-md" name="message" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="number" id="phone" className="border-0 bg-gray-200  shadow-md" required/>
                        </div> 
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" id=""  className="mt-1 bg-red-400"/>
                            <span>Save this information for faster check-out next time</span>
                        </div>
                        {
                            cash ?
                            <input type="submit" value="Place Order" 
                            className="bg-red-500 text-white
                            lg:px-9 md:px-4 px-4 
                            lg:py-3 md:py-2 py-1
                            rounded-md 
                            mx-auto
                            lg:w-40 md:w-44 w-28 hover:cursor-pointer" 
                            />
                            :
                            <input type="" value="Place Order" 
                            className="bg-gray-500 text-white
                            lg:px-9 md:px-4 px-4 
                            lg:py-3 md:py-2 py-1
                            rounded-md 
                            mx-auto
                            lg:w-40 md:w-44 w-28 hover:cursor-pointer" 
                            onClick={Notify}/>
                        }
                    </form>
            </div>
        </div>
    )
}