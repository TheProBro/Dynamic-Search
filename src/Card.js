import React from "react";

const Card=(p)=>{
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${p.id}?200x200`} alt="robot"/>
            <div>
                <h2>{p.name}</h2>
                <p>{p.email}</p>
            </div>
        </div>
    );
}

export default Card; 