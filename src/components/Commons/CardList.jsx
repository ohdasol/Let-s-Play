import React, { useState } from 'react'
import BadmintonList from '../Sports/BadmintonList'
import BasketballList from '../Sports/BasketballList'
import FutsalList from '../Sports/FutsalList'
import classes from './CardList.module.css'

const CardList = (props) => {

    return (
        <div className={classes.cards}>
            {props.category === 'futsal' ? <FutsalList openinpo={props.openinpo} category={props.category}/> : (props.category === 'badminton' ? <BadmintonList openinpo={props.openinpo} category={props.category}/> : <BasketballList openinpo={props.openinpo} category={props.category}/>)}
        </div>
    )
}

export default CardList