
export default function SearchResult({result}){
    return(
        <div>
            <h2>{ !result && result.map((e)=>{
                return(
                    <div>
                        {e.name}
                    </div>
                )
            })}</h2>
        </div>
    )
}