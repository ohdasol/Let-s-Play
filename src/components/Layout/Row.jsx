import React, { useEffect, useState } from 'react'
import classes from './Row.module.css'
import CardList from '../Commons/CardList'

const Row = (props) => {

    return (
        <div className={classes.row}>
            <h2>{props.title}</h2>
            <div className={classes.card_lists}>
                <CardList openinpo={props.openinpo} category={props.category} />
            </div>
        </div>
    )
}

export default Row