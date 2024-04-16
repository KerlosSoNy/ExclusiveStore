import Header from "../MainComponent/header";


export default function NewArrival(){
    return(
        <div className="container 
        mx-auto lg:my-10 lg:mt-20 
        md:my-10 md:mt-20
        my-0 mt-4
        lg:h-[768px] md:h-[600px] h-[530px]
        pb-10
        relative">
        
            <div className="px-4">
                <Header name={"Featured"}/>
            </div>
            <div className="flex flex-row items-center justify-between px-4 ">
                    <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold pb-3 ps-4 w-full mt-2">New Arrival</h1>
            </div>
            <div className="flex flex-row  w-full gap-5 px-4 mt-5">
                <div className="relative w-[49%]">
                    <div className="relative lg:h-[600px] md:h-[432px] h-[400px] text-white z-20 flex flex-col justify-end ;g:p-10 md:p-10 p-4 pb-5">
                            <h1 className="lg:text-6xl md:text-4xl text-xl my-2">PlayStation 5</h1>
                            <a href="/" className="my-2 border-b-2 border-[#f5f5f5] w-fit">Shop Now</a>
                    </div>
                    <img src="https://assets-prd.ignimgs.com/2024/03/09/ps5thumb-1709995577903.png" alt="" className="absolute z-0 top-0 lg:h-[600px] md:h-[432px] h-[380px]"/>
                </div>
                <div className="flex flex-col w-[49%] lg:h-[600px] md:h-[432px] h-[380px] gap-2">
                    <div className="relative h-[49%]">
                        <div className="relative h-full text-white z-20 flex flex-col justify-end p-6">
                            <h1 className="lg:text-4xl md:text-2xl text-base">Women’s Collections</h1>
                            <a href="/" className="border-b-2 border-[#f5f5f5] w-fit">Shop Now</a>
                        </div>
                        <img src="https://e0.pxfuel.com/wallpapers/220/477/desktop-wallpaper-smoking-girl-dark-women-smoke.jpg" alt="" className="h-[100%] w-full absolute top-0"/>
                    </div>
                    <div className="flex flex-row lg:gap-2 md:gap-2 gap-0 h-[49%]">
                        <div className="relative lg:w-[49%] md:w-[49%] w-[100%]">
                            <div className="relative h-full text-white z-20 flex flex-col justify-end lg:p-6 md:p-6 p-2">
                                <h1  className="text-2xl ">Speakers</h1>
                                <a href="/" className="border-b-2 border-[#f5f5f5] w-fit">Shop Now</a>
                            </div>
                            <img src="https://wallpaperset.com/w/full/8/5/0/154098.jpg" alt="" className="absolute top-0 h-full w-[100%]"/>
                        </div>
                        <div className="relative w-[49%] lg:block md:block hidden ">
                            <div className="relative h-full text-white z-20 flex flex-col justify-end p-6">
                                <h1 className="text-2xl">Perfume</h1>
                                <a href="/" className="border-b-2 border-[#f5f5f5] w-fit">Shop Now</a>
                            </div>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0d122a140931963.624aebad5c2dc.jpg" alt="" className="absolute top-0 h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}