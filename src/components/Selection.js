
import React, { useEffect, useState } from "react";
import '../styles/App.css';



const title = 'Select the gradient and then the Box to change the color';

const Selection = ({data,applyColor}) => {
  return (
    <div data-test-id={applyColor}  style={{width:'100px',height:'100px',backgroundColor:applyColor,textAlign:'center',border:'1px solid white'}} >
     {data}
    </div >
  )
}


export default Selection;
