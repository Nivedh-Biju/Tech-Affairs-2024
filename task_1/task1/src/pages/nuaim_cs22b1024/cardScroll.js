import { React } from "react";
import './cardScroll.css';

function CardScroll(){
    let cards=['lorem','ipsum','gypsum','ripsum','and','tearsum'];
    return(
        <div className="card-container">
            {cards.map((card,index)=>{
                return <div key={index} className="card">{card}</div>
            })}
        </div>
    );
}

export default CardScroll;