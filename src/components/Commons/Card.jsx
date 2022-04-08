import React from 'react'
import App from '../../App'
import Inposet from '../inpo/Inposet'
import classes from './Card.module.css'


const Card = (props) => {
    
    
    return (
        
        <div className={classes.card}>
            
            <img src={`/images/${props.category}/card_image.jpg`} alt={`This is ${props.category} image`} />
            <div className={classes.info}>
                <h3>name : {props.name}</h3>
                <h3>location : {props.loc}</h3>
               
            </div>
        </div>
    )
}

export default Card