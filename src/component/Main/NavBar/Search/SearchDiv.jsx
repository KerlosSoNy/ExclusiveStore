
import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
export default function SearchDiv(){
    const [result , setResults ]= useState()
    return(
        <div className='w-full'>
                <SearchBar setResults={setResults}/>
                {result && result.length > 0 && <SearchList result={result}/>}
        </div>
    )
}