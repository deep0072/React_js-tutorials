import React, { useState }from "react"





export const Counter1 = ()=>{
    const [currentState, setCurrentState] = useState(0);

    const Plus = ()=>{
        setCurrentState(currentState+1);
    }
    

    const Minus = ()=>{
        setCurrentState(currentState-1);
    }


    return(
        <div>
            <h1>{currentState}</h1>
            <button onClick = {Plus}>Plus</button>
            <button onClick= {Minus}>minus</button>
        </div>
    )
}