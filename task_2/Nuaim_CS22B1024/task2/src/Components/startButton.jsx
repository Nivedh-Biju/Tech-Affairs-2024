import React from "react";
import './startButton.css';
import { isQuizTime, startQuiz } from "./quizContainer";

function handleStartButton(){
    const backgroundElement=document.querySelector('.background-container');
    if(backgroundElement.children.length<4){
        let node=document.createElement("div");
        node.classList.add('circle');
        backgroundElement.appendChild(node);
    }
    nextCircleAnimation();
    const buttonElement=document.querySelector('.start-button');
    const borderElement=document.querySelector('.button-border');
    const pulsingElement=document.querySelector('.animated-outer-border');
    buttonElement.style.opacity='0';
    borderElement.style.opacity='0';
    pulsingElement.style.display='none';
    startQuiz();
    if(isQuizTime){
        setTimeout(()=>{
            buttonElement.style.opacity='50%';
        },1000)
    }
    else{
        setTimeout(()=>{
            buttonElement.style.opacity='100%';
            borderElement.style.opacity='100%';
            pulsingElement.style.display='block'
        },1000)
    }
}

function nextCircleAnimation(){
    let circleSizes=[900,700,500,300];
    const circlesList=document.querySelectorAll('.circle');
    circlesList.forEach((circle,index) => {
        setTimeout(() => {
            circle.style.transform=`scale(${circleSizes[index]-10})`;
        }, index*100);
    });
    circlesList[0].style.transition='all 2s, opacity 1s, box-shadow 1s';
    circlesList[0].style.opacity='0';
    circlesList[0].style.boxShadow='';
    setTimeout(()=>{
        circlesList[0].remove();
    },1000)
}

function StartButton(){
    return (
        <div className="button-container">
            <div className="animated-outer-border">
            </div>
            <div className="button-border">
            </div>
            <button onClick={handleStartButton} className="start-button">
            </button>
        </div>
    );
}

export default StartButton;