import React from "react";

const SearchBox = ({Searchchange}) =>
{
    return(
        
        <div className="pa2">
        <input className='tc pa3 mb2 b--green bg-light-blue' 
        type='search' 
        placeholder='Search robots'
        onChange={Searchchange}    
        />
        
        </div>
        
    );
}

export default SearchBox;