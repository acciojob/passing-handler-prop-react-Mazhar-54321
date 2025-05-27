
import React, { useEffect, useState } from "react";
import '../styles/App.css';



const title = 'Select the gradient and then the Box to change the color';

const Selection = ({data,applyColor}) => {
  const [background,setBackground]= useState({background:'',colorName:''});
  console.log(background)
  return (
    <div onClick={()=>applyColor(setBackground)} data-testid={background.colorName}  style={{width:'100px',height:'100px',backgroundColor:background.background,textAlign:'center',border:'1px solid white'}} >
     {data}
    </div >
  )
}


export default Selection;
