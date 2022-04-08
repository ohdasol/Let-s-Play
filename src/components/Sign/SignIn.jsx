import React from 'react'
import Modal from '../Commons/Modal'
import classes from './SignIn.module.css'

const SignIn = (props) => {
    const SignUpPage = (
     <div className={classes.info}> 
        <p><label>Email Address</label></p>
        <p><input type="email"></input></p>
        <p><label>Password</label></p>
        <p><input type="Password"></input></p>
        <br />
        <button>로그인</button>
    </div>
    );
   
    return <Modal onClose={props.onClose}>{SignUpPage}</Modal>;
}

export default SignIn