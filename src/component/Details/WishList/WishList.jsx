import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { AddToWichList } from "../../../store/Slices/WhichList";
import { AiOutlineHeart } from "react-icons/ai";
import { increaseCount } from "../../../store/Slices/cart";


export default function WishList(){
    const wish = useSelector(state=>state.WichList)
    const disp = useDispatch()
    let Notify2 = () => {
        toast.success("Success Remove From WichList !");
    };
    console.log(wish)
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
                    <Link to='/wishlist' className="text-xl">Wishlist</Link>
                </div>
                <div>
                {
                    Array.isArray(wish) && wish.length > 0? 
                    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1  gap-5 justify-center p-6 shadow-lg font-semibold">
                        {wish.map((e)=>{
                            return(
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 flex flex-col relative">
                                    <button className={`absolute top-0 left-0 p-3 text-2xl z-40 bg-black bg-opacity-50 rounded-lg m-2`} onClick={()=> {
                                            disp(AddToWichList(e))
                                        }
                                            }>
                                            <AiOutlineHeart onClick={Notify2}/>
                                    </button>
                                    <Link to={`/product/${e.id}`}>
                                        <img className="rounded-t-lg p-2 w-[220px] h-[200px] mx-auto" src={e.image} alt={e.image} />
                                    </Link>
                                    <div className="p-5 flex flex-col justify-around">
                                        <Link to={`/product/${e.id}`}>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-h-24 h-20">{e.title.slice(0,48)}...</h5>
                                        </Link>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-32 h-32 mt-4">{e.description}</p>
                                        <button onClick={()=> disp(increaseCount({product: e , count : 1}))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-[36%] mg:w-[36%] w-[42%] mx-auto mt-5">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div className="flex flex-row w-full ">
                        <div className="w-full h-[72px] p-6 shadow-lg">
                            <h1 className="w-full text-center font-semibold">No Product Yet...</h1>
                        </div>
                    </div>
                }
                </div>
                <div className="flex flex-row justify-between ">
                    <Link to='/' className="w-[218px] h-[56px] border-2 border-gray-400 rounded-lg flex flex-col justify-center">
                        <Link className="mx-auto" to='/' > Return To Shop</Link>
                    </Link>
                    <Link className="w-[218px] h-[56px] border-2  border-gray-400 rounded-lg flex flex-col justify-center" to='/cart'>
                        <button className="mx-auto" >Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}