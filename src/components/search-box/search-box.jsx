import React from 'react'
import './search-box-style.css'

export const SearchBox = (props) =>{

    return (
        <input 
            className = 'search'
            type = 'search' 
            placeholder = 'search here...' 
            onChange = {props.handleChange} />
    )
    
}