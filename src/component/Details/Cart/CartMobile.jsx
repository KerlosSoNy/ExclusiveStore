import { decreaseCount, deleteProduct, increaseCartCount } from "../../../store/Slices/cart";
import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom"

export default function CartMobile(){
    const cart = useSelector(state=> state.Cart)
    const disp = useDispatch();
    return(
        <div>
            { Array.isArray(cart) && cart.length > 0 ? cart.map((e)=>{
                        return(
                                <div className="grid grid-cols-1 justify-start p-6 gap-6 shadow-lg">

                                    <div className="flex flex-row justify-between gap-2">
                                        <span className="my-auto">Product: </span>
                                        <img src={e.product.image} alt="" className="w-[50px] h-[40px] my-auto pt-1 me-3"/>
                                        
                                    </div>
                                    <div className="flex flex-row justify-between gap-2">
                                        <span className="my-auto">Title: </span>
                                        <Link to={`/product/${e.product.id}`} className="py-3 ">{e.product.title.slice(0,20)}...</Link>
                                    </div>


                                    <div className="flex flex-row justify-between gap-2">
                                    <span className="my-auto">Price: </span>
                                        ${e.product.price}
                                    </div>

                                    <div className="flex flex-row justify-between">
                                    <span className="my-auto">Count: </span>
                                            <div className="flex flex-row">
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
                                    </div>

                                    <div className="flex flex-row justify-between">
                                    <span className="my-auto">Subtotal: </span>
                                    
                                        ${ e.product.price * e.count}
                                    </div>

                                    <div className="text-center  pe-2 text-red-500">
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