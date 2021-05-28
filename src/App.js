
import './App.css';

import  Headers   from './components/header'
import  { Body, Body2} from './components/body'
import {Counter1} from './components/counter'

import {Headers2}   from './components/header'
import React, { useState }from "react"



function App() {

  let [currentState,setCurrentState] = useState(true);
  
  

  const stateTrue = ()=>{
    setCurrentState(!currentState)
    
  }
  

  
  const  buttontext = currentState ? "hide": "show"

 
  
    return (

     

      
    
    
      
      <div className="App">

          <Headers title={"hey boyzzzz want to buy 69bit coin"} num = {69}
            myObj = {{a:5,
              b:6            
            }}

            my_func = {(a,b)=>a+b} />

          
           

          {currentState ? <Headers2 /> : <Counter1 />}
          
          <button  onClick = {stateTrue}>{buttontext}</button>
        
          <Body2 />
         
          <Body text = "well this is my body"  myfunc = {(a,b)=> a+b}
          />
         
          

      </div>
    );
}

export default App;
