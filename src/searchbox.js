import React from "react";

const Searchbox=({searchField, searchChange})=>{
    return(
        <div className="pa2">
            <input type='search' placeholder='search for robots' onChange={searchChange}/>

        </div>

    );
}

export default Searchbox;