import styled from "styled-components";
import images from "../Data/Data";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"
import { useState } from "react";

const Container=styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;   
   `

const Arrow=styled.div`
    width: 30px;
    height: 30px;
    position:absolute;
    padding: 5px;
    background-color: aliceblue;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    top:50vh;
    left:${props=> props.direction=== "left" && "10px"};
    right:${props=> props.direction=== "right" && "10px"};
    cursor: pointer;
    opacity: 1;
    z-index: 3;

    &:hover{
        background-color: #32a85c;
    }
`

const Slider=styled.div`
     height: 100vh;
     width: 100%;   
     display: flex;
     flex-direction: row;
     justify-content: center;
     &:img{
      width: 100%;
     }
 
`

function ImageSlider() {

  const [imgNo,setImgNo]=useState(0);

  const handleClick=(direction)=>{
    if(direction==="left")
      setImgNo(imgNo > 0 ? imgNo-1 : 6);
    else
      setImgNo(imgNo < 6 ? imgNo+1 : 0);
  }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}><BiLeftArrow /></Arrow>
        <Slider style={{transform:`translate(${imgNo*-100}vw)`}}>
            {images.map(img=>{
                return(
                <img src={img.url} alt="Sorry img not loaded" />
           )})};
        </Slider>
        <Arrow direction="right" onClick={()=>handleClick("right")}><BiRightArrow /></Arrow>
    </Container>
  )
}

export default ImageSlider