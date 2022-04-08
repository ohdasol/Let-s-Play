import React from 'react'
import Row from './Row'
import classes from './Main.module.css'
const Main = (props) => {
  return (
    <div className={classes.main}>
      <Row openinpo={props.openinpo} title='Futsal' category='futsal' />
      <hr />
      <Row openinpo={props.openinpo} title='Badminton' category='badminton' />
      <hr />
      <Row openinpo={props.openinpo} title='Basketball' category='basketball' />
      <hr />
    </div>
  )
}

export default Main