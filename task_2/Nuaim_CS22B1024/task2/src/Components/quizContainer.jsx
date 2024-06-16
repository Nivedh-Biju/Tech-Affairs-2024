import React from "react";
import './quizContainer.css';
import questions from '../questions.json';

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
export let isQuizTime=false;
let chosenQs;

export function startQuiz(){
    const quizContainer=document.querySelector('.quiz-main-container');
    if(!isQuizTime){
        chosenQs=chooseQuestions();
        isQuizTime=true;
    }
    let questionHTML=`
        <div class="quiz-board">
            <div class="question-num">Question ${QIndex+1}</div>
            <div class="question">
                ${chosenQs[QIndex].question}
            </div>
            <div class="options">
                <div id="A">${chosenQs[QIndex].A}</div>
                <div id="B">${chosenQs[QIndex].B}</div>
                <div id="C">${chosenQs[QIndex].C}</div>
                <div id="D">${chosenQs[QIndex].D}</div>
            </div>
        </div>
    `;
    quizContainer.innerHTML=questionHTML;
    QIndex++;
    if(QIndex===15){
        QIndex=0;
        isQuizTime=false;
        quizContainer.innerHTML=introTextHTML;
    }
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