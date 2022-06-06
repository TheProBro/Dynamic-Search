import React from "react";

const Scroll = (p)=>{
    return (
        <div style={{overflowY: 'scroll', border: '1px solid block', height: '800px'}}>
            {p.children}
        </div>
    );
}

export default Scroll;