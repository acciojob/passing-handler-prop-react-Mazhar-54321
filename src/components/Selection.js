
import React, { useEffect, useState } from "react";
import '../styles/App.css';



const title = 'Select the gradient and then the Box to change the color';

const Selection = ({data,applyColor}) => {
  const [background,setBackground] = useState('')
  useEffect(()=>{
  console.log(background,";;;;")
  },[background])
  return (
    <div onClick={()=>applyColor(setBackground)} style={{width:'100px',height:'100px',backgroundColor:background,textAlign:'center',border:'1px solid white'}} >
     {data}
    </div >
  )
}


export default Selection;
