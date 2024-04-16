

export default function Header(props){
    return(
        <div className="flex flex-row gap-3">
            <span className="w-[20px] h-[40px] bg-red-500 text-red-500 rounded-sm">.</span>
            <h1 className="text-red-500 font-semibold my-auto text-base">{props.name}</h1>
        </div>
    )
}