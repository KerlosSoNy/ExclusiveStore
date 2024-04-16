
import {  useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartDesktop from "./CartDesktop";
import CartMobile from "./CartMobile";

export default function CartPage(){
    const cart = useSelector(state=> state.Cart)

    let totalPayment = 0;
    const reloadPage = ()=>{
        window.location.reload()
    }
    cart !== undefined && cart.map((e)=>{
        return totalPayment = (e.count * e.product.price) + totalPayment;
    })
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
                <div className="flex flex-row gap-5">
                    <Link to='/' className="text-gray-400 text-xl">Home</Link>
                    <span className="text-gray-400 text-xl">/</span>
                    <Link to='/cart' className="text-xl">Cart</Link>
                </div>
                <div className="flex flex-col w-full gap-5">
                    <div className="lg:block md:block hidden ">
                        <CartDesktop/>
                    </div>
                    <div className="lg:hidden md:hidden block ">
                        <CartMobile/>
                    </div>
                </div>
                <div className="flex flex-row justify-between ">
                    <Link to='/' className="w-[218px] h-[56px] border-2 border-gray-400 rounded-lg flex flex-col justify-center">
                        <Link className="mx-auto" to='/' > Return To Shop</Link>
                    </Link>
                    <button className="w-[218px] h-[56px] border-2  border-gray-400 rounded-lg flex flex-col justify-center" onClick={()=>{
                            reloadPage()
                        }}>
                        <button className="mx-auto" >Update Cart</button>
                    </button>
                </div>
                <div className="flex flex-row justify-end">
                    <div className="flex flex-col lg:w-[25%] md:w-[50%] w-[100%] border-2 border-black rounded-lg p-5 gap-5">
                        <h1 className="text-2xl font-semibold">Cart Total</h1>
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
                        { Array.isArray(cart) && cart.length>0 && <Link to='/cart/cashout' className="bg-red-500 
                            lg:px-10 md:px-4 px-4 
                            lg:py-3 md:py-2 py-1
                            rounded-md 
                            mx-auto
                            lg:w-56 md:w-44 w-44">Procees to checkout</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}