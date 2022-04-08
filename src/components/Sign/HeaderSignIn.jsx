import React from 'react'
import classes from './HeaderSignIn.module.css'

const HeaderSignIn = (props) => {
  return (
    <button className={classes.button} onClick={props.onSignInOpen}>
      <span>Sign In</span>
    </button>
  )
}

export default HeaderSignIn