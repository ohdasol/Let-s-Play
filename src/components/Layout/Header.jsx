import React from 'react'
import classes from './Header.module.css'
import HeaderSignUp from '../Sign/HeaderSignUp'
import HeaderSignIn from '../Sign/HeaderSignIn'
import { FaReact } from 'react-icons/fa';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.header__banner}>
                    <FaReact size={"8rem"}/>
                    <h1 className={classes.slogan}>Let's Play!!</h1>
                    <div className={classes.sign}>
                        <HeaderSignIn onSignInOpen={props.onSignInOpen} />
                        <HeaderSignUp onSignUpOpen={props.onSignUpOpen} />
                    </div>
                </div>
                <div className={classes.fadeBottom}></div>
            </header>
        </>
    )
}

export default Header