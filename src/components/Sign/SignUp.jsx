import React from 'react'
import Modal from '../Commons/Modal'
import Button from '../Commons/Button'
import classes from './SignUp.module.css'

const SignUp = (props) => {
    const SignUpPage = (
     <div className={classes.info}> 
        <p><label>Email</label></p>
        <p><input type="email"></input></p>
        
        <p><label>Name</label></p>
        <p><input type="name"></input></p>
        
        <p><label>Password</label></p>
        <p><input type="Password"></input></p>

        <p><label>Confirm Password</label></p>
        <p><input type="Password"></input></p>
        <br />
        <button>회원가입</button>
    </div>
    );
   
    return <Modal onClose={props.onClose}>{SignUpPage}</Modal>;
}

export default SignUp