import { useEffect,React } from "react";
import './bgAnim.css'


function BgAnim(){
    useEffect(circleAnimation);
    return(
        <div className="background-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}

function circleAnimation(){
    let circleSizes=[700,500,300];
    document.querySelectorAll('.circle').forEach((circle,index)=>{
        setTimeout(() => {
            circle.style.transform=`scale(${circleSizes[index]})`;
        }, index*500);
        setTimeout(()=>{
            circle.style.transform=`scale(${circleSizes[index]-10})`;
        },index*1000);
    });
}

export default BgAnim;