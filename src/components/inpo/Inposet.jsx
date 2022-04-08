import React from 'react'
import Modal from '../Commons/Modal'
import classes from './inposet.module.css'

const Inposet = (props) => {
    const infopage = (
     <div className={classes.info}> 
        <p><label>{props.name}</label></p>
        <p><label>{props.loc}</label></p>
        <br />
        <button>예약 !</button>
    </div>
    );
   
    return <Modal onClose={props.onClose}>{infopage}</Modal>;
}

export default Inposet