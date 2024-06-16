import React, { useState } from "react";
import './quizContainer.css';
import questions from '../questions.json';
import { capitalizeFirstLetter } from "../utils/stringFormats.js";
import { turnOnButton,turnOffButton } from "./startButton.jsx";

const introTextHTML=`
    <div class="intro-text-container">
        <div class="main-text">
            Welcome to the Quizzical<br/>Quizzable Quiz Experience 
        </div>
        <div class="sub-text">
            Just answer 15 questions and check out your score in the scoreboard
        </div>
    </div>
`

let QIndex=0;
let isQuizTime=false;
let chosenQs;

export function startQuiz(){
    const quizContainer=document.querySelector('.quiz-main-container');
    quizContainer.style.opacity='0';
    if(!isQuizTime){
        chosenQs=chooseQuestions();
        isQuizTime=true;
    }
    if(QIndex>=15){
        QIndex=0;
        isQuizTime=false;
        turnOffButton();
        setTimeout(()=>{
            quizContainer.innerHTML=introTextHTML;
            quizContainer.style.opacity='100%';
            turnOnButton();
        },500);
    }
    if(isQuizTime){
        setTimeout(()=>{
            let questionHTML=`
                <div class="quiz-board">
                    <div class="question-num">Question ${QIndex+1}</div>
                    <div class="question">
                        ${chosenQs[QIndex].question}
                    </div>
                    <div class="options" data-answer=${chosenQs[QIndex].answer}>
                        <div class="option" id="A">${capitalizeFirstLetter(chosenQs[QIndex].A)}</div>
                        <div class="option" id="B">${capitalizeFirstLetter(chosenQs[QIndex].B)}</div>
                        <div class="option" id="C">${capitalizeFirstLetter(chosenQs[QIndex].C)}</div>
                        <div class="option" id="D">${capitalizeFirstLetter(chosenQs[QIndex].D)}</div>
                    </div>
                </div>
            `
            quizContainer.innerHTML=questionHTML;
            quizContainer.style.opacity='100%';
            const optionsElement=document.querySelector('.options');
            for(let i=0;i<optionsElement.childElementCount;i++){
                optionsElement.children.item(i).addEventListener('click',handleOptionClick);
            }
            QIndex++;
        },500);
        turnOffButton();
        const buttonElement=document.querySelector('.start-button');
        buttonElement.style.opacity='50%';
    }
}

function handleOptionClick(event){
    const optionsElement=document.querySelector('.options');
    const chosenOption=event.target;
    if(chosenOption.id===optionsElement.dataset.answer){
        chosenOption.style.backgroundColor='green';
    }
    else{
        chosenOption.style.backgroundColor='red';
    }
    /*getting rid of all the children's event listeners*/
    for(let i=0;i<optionsElement.childElementCount;i++){
        const option=optionsElement.children.item(i)
        if(option!==chosenOption){
            option.style.backgroundColor='transparent';
            option.style.opacity='40%';
        }
        option.removeEventListener('click',handleOptionClick);
        option.style.color='white';
        option.style.cursor='default';
    }
    turnOnButton();
}

function chooseQuestions(){
    let Qs=[]
    for(let i=0;i<15;i++){
        Qs.push(questions[Math.floor(Math.random()*548)]);
    }
    return Qs;
}

/*async function getQuestions(){
    const response=await fetch('https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/96ae8cbebd92c97dfbe53ad8927a45a28f8d2358/questions.json');
    console.log(await response.json());
}*/

function QuizContainer(){
    return(
        <div className="quiz-main-container">
            <div className="intro-text-container">
                <div className="main-text">
                    Welcome to the Quizzical<br/>Quizzable Quiz Experience 
                </div>
                <div className="sub-text">
                    Just answer 15 questions and check out your score in the scoreboard
                </div>
            </div>
        </div>
    )
}

export default QuizContainer;