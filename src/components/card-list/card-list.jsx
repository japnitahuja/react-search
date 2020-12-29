import './card-list-style.css'
import React from 'react'
import {Card} from '../card/card.jsx'

export const CardList = (props) => {
    return <div className = 'card-list'> 
    {props.kittens.map(kitten => (
        <Card key = {kitten.id} kitten = {kitten} />
      ))} 
      </div>

}

