import React from 'react'
import { Container } from 'react-bootstrap';
import classes from './Footer.module.css'

const Footer = () => {
    return (
    <footer className={classes.footer}>
        <Container>
            <div style = {{textAlign:"center"}}>
              <h2>2022 Let's Play ! All Rights Reserved.</h2>
            </div>
        </Container>
    </footer>
    )
  };

export default Footer