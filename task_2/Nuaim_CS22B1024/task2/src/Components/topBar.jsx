import React from "react";
import './topBar.css'

let toggle=false;

function handleHamburgerClick(){
    const hamburgerElement=document.querySelector('.topbar-container .hamburger-icon');
    const sidebarElement=document.querySelector('.sidebar-container')
    if(!toggle){
        sidebarElement.style.transform="translateX(0)";
        hamburgerElement.innerText='X'
    }
    else{
        sidebarElement.style.transform="translateX(-100vw)";
        hamburgerElement.innerText='☰';
    }
    toggle=!toggle;
}

function Bars(){
    return (
    <>
        <div className="topbar-container">
            <div onClick={handleHamburgerClick} className="hamburger-icon">
                ☰
            </div>
            <div className="main-logo">
                Quizzable
            </div>
            <div className="share-button">
                Share
            </div>
        </div>
        <div className="sidebar-container">
            <div>Home</div>
            <div>Quiz</div>
            <div>Score</div>
        </div>
    </>)
}

export default Bars