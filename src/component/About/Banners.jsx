import { FaStoreAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";


export default function Banners(){
    return(
            <div className="px-3 md:lg:xl:px-30   border-t border-b py-20 bg-opacity-10 my-10">
            <div className="grid grid-cols-1 lg:xl:grid-cols-4 md:grid-cols-2 gap-4 group bg-white shadow-xl shadow-neutral-100 border ">


                <div
                    className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                        <FaStoreAlt className="text-3xl"/>
                    </span>
                    <p className="text-4xl font-medium text-slate-700 mt-3">10.5k </p>
                    <p className="mt-2 text-2xl text-slate-500">Sallers active our site</p>
                </div>

                <div
                    className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
                    <FaDollarSign className="text-3xl"/>

                    </span>
                    <p className="text-4xl font-medium text-slate-700 mt-3">33k</p>
                    <p className="mt-2 text-2xl text-slate-500">Mopnthly Produduct Sale</p>
                </div>

                <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
                        <FaShoppingBag className="text-3xl"/>
                    </span>
                    <p className="text-4xl font-medium text-slate-700 mt-3">45.5k</p>
                    <p className="mt-2 text-2xl text-slate-500">Customer active in our site</p>
                </div>


                <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                    <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
                        <TbMoneybag  className="text-3xl" />
                    </span>
                    <p className="text-4xl font-medium text-slate-700 mt-3">25k</p>
                    <p className="mt-2 text-2xl text-slate-500">Anual gross sale in our site</p>
                </div>
            </div>
        </div>
    )
}