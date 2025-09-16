import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ()=>{

    const [searchBar , setSearchBar]=useState('');
    const trackSearchBar = (event)=>{
        setSearchBar(event.target.value);
    }

    return(
        <input type="text" placeholder="Search" onChange={trackSearchBar} value={searchBar} id="search-bar"/>
    )
}

export default SearchBar; 