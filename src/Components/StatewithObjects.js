import React,{useState} from "react";

const StatewithObjects =()=>{
    let [count, setCount] = useState({gold: 0, silver: 0, bronze: 0})

    return(
        <div>
            <h1>Gold:{count.gold} Silver: {count.silver} Brownze: {count.bronze}</h1>
            <button onClick={()=> setCount({...count,gold: count.gold+1})}>Increase Gold</button>
            <button onClick={()=> setCount({...count,silver: count.silver+1})}>Increase Silver</button>
            <button onClick={()=> setCount({...count,bronze: count.bronze+1})}>Increase Brownze</button>
        </div>
    )
}

export default StatewithObjects;