
import { decreaseCount, deleteProduct, increaseCartCount } from "../../../store/Slices/cart";
import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom"

export default function CartDesktop(){
    const cart = useSelector(state=> state.Cart)
    const disp = useDispatch();
    return(
        <div>
            <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-flow-col gap-5 justify-center h-[72px] p-6 shadow-lg font-semibold">
                        <span className="text-start">Product</span>
                        <span className="text-center">Price</span>
                        <span className="text-center">Quantity</span>
                        <span className="text-center">Subtotal</span>
                        <span className="text-end">Remove</span>
            </div>
            { Array.isArray(cart) && cart.length > 0 ? cart.map((e)=>{
                        return(
                                <div className="grid grid-cols-5 justify-between align-middle items-center h-[102px] px-6 shadow-lg">

                                    <div className="flex flex-row gap-2">
                                        <img src={e.product.image} alt="" className="w-[50px] h-[40px] my-auto pt-1 me-3"/>
                                        <Link to={`/product/${e.product.id}`} className="py-3 ">{e.product.title.slice(0,24)}...</Link>
                                    </div>


                                    <div className="text-center">
                                        ${e.product.price}
                                    </div>

                                    <div className="flex flex-row justify-center">
                                            <button className="text-2xl border-2 border-gray-400 px-1 py-1 rounded-l-lg"
                                            onClick={()=> 
                                            disp(decreaseCount(e))                                    
                                            }
                                            >
                                                    -
                                            </button> 
                                            <div className="text-2xl border-2 border-l-0 border-r-0 px-3 py-1 border-gray-400">
                                                    {e.count}
                                            </div>
                                            <button className="bg-red-500 text-white text-2xl border-2 px-1 py-1 border-red-600 rounded-r-lg"
                                            onClick={()=> {
                                                disp(increaseCartCount(e))
                                            }}
                                            >
                                                    +
                                            </button>
                                    </div>

                                    <div className="text-center">
                                        ${ e.product.price * e.count}
                                    </div>

                                    <div className="text-end  pe-2 text-red-500">
                                    <button onClick={()=>
                                    {console.log('delete')
                                    disp(deleteProduct(e))}
                                    }>
                                        <MdDelete className="text-end text-3xl"/>
                                    </button>
                                    </div>
                                </div>
                        )
                    }) :
                    <div className="flex flex-row w-full ">
                        <div className="w-full h-[72px] p-6 shadow-lg">
                            <h1 className="w-full text-center font-semibold">No Product Yet...</h1>
                        </div>
                    </div>
                    }
        </div>
    )
}