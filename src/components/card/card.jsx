import React from 'react'
import './card-style.css'

export const Card = (props) => {
    return(
        <div className = 'card'>
        <img alt='kitten' src = {`https://robohash.org/${props.kitten.id}.png?set=set4&size=150x150`}/>
        <h2>{props.kitten.name}</h2>
    </div>
    )
}
    