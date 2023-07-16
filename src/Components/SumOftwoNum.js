import React,{useState} from "react";

const SumOftwoNum =()=>{

    let [firstnumber,setFirstnumber] = useState(0)
    let [secondnumber, setSecondnumber] = useState(0)
    let [sum, setSum] = useState(0)

    return (
        <div>
            <input type="number" placeholder="Enter fristnumber" onChange={(e)=> setFirstnumber(e.target.value)}/>
            <input type="number" placeholder="Enter secondnumber" onChange={(e)=> setSecondnumber(e.target.value)}/>
            <button onClick={()=> setSum(parseFloat(firstnumber) + parseFloat(secondnumber))}>Add</button>
            <h1>Sum of two number is: {sum}</h1>
        </div>
    )
}

export default SumOftwoNum;