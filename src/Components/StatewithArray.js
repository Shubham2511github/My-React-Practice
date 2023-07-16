import React,{useState} from "react";

const StatewithArray = ()=>{
    let [fruits, setFruits] = useState(["Apple","Mango","Orange","Banana"])
    let [fruit,setFruit] = useState("")

    function manageFruits(event){
        setFruit( event.target.value)
        
    }
    return(
        <div>
        <input type="text" onChange={manageFruits} value={fruit} />
        <button onClick={()=> setFruits([...fruits,fruit]) }>Add Fruit</button>
        
        <h1>{fruits.join(" ")}</h1>
        </div>
    )
}
export default StatewithArray;