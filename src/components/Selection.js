
import React, { useEffect, useState } from "react";
import '../styles/App.css';



const title = 'Select the gradient and then the Box to change the color';

const Selection = ({data,applyColor}) => {
  console.log(applyColor)
  return (
    <div data-testid={applyColor.colorName}  style={{width:'100px',height:'100px',backgroundColor:applyColor.background,textAlign:'center',border:'1px solid white'}} >
     {data}
    </div >
  )
}


export default Selection;
