import React,{useState} from "react";

const SimpleForm =()=>{

    let [name,setName] = useState("");

    // function manageName(event){
    //     setName(event.target.value.toUpperCase());
    // }

    return (
        <div>
            <input type="text" placeholder="Enter your name"  onChange={(event)=> setName(event.target.value)}
            value={name}
            />
            <button onClick={()=> setName("")}>Clear</button>
            <h1>{name}</h1>
            
        </div>
    )
}

export default SimpleForm;