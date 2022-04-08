import React from 'react'
import classes from './HeaderSignUp.module.css'
import Button from '../Commons/Button'

const HeaderSingUp = (props) => {
  return (
    <button className={classes.button} onClick={props.onSignUpOpen}>
      <span>Sign Up</span>
    </button>
  )
}

export default HeaderSingUp