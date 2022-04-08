import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    const msg = props.msg
    return (
        <button 
            className={classes.button}
            type='button'
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button