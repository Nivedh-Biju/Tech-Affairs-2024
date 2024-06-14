import React from 'react'

const Card = (props) => {
  return (
    <div>
        <img key={props.index} src = {props.src} alt={props.alt} className="w-full h-auto" />
    </div>
  )
}
export default Card