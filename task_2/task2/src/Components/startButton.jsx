import React from "react";
import './startButton.css';

function handleStartButton(){
    const backgroundElement=document.querySelector('.background-container');
    if(backgroundElement.children.length<4){
        let node=document.createElement("div");
        node.classList.add('circle');
        backgroundElement.appendChild(node);
    }
    nextCircleAnimation();
}

function nextCircleAnimation(){
    let circleSizes=[900,700,500,300];
    const circlesList=document.querySelectorAll('.circle');
    circlesList.forEach((circle,index) => {
        setTimeout(() => {
            circle.style.transform=`scale(${circleSizes[index]-10})`;
        }, index*100);
    });
    circlesList[0].style.opacity=0;
    setTimeout(()=>{
        circlesList[0].remove();
    },1000)
}

function StartButton(){
    return (
        <div className="button-container">
            <div className="animated-outer-border">
            </div>
            <div onClick={handleStartButton} className="button-border">
                <button className="start-button">
                </button>
            </div>
        </div>
    );
}

export default StartButton;