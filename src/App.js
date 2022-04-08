import React, { useState } from 'react';
import Main from './components/Layout/Main'
import Header from './components/Layout/Header'
import SignUp from './components/Sign/SignUp'
import SignIn from './components/Sign/SignIn';
import Footer from './components/Layout/Footer';
import Inposet from './components/inpo/Inposet';
import Card from './components/Commons/Card'
import './App.css'
import FutsalList from './components/Sports/FutsalList';

const App = () => {
  
  const [signInIsShown, setSignInIsShown] = useState(false);
  const [signUpIsShown, setSignUpIsShown] = useState(false);
//-------------------------------------------------------------
  const [inpoIsShown, setinpoIsShown] = useState(false);

  const openinpo = () => {
    setinpoIsShown(true);

  
  }

  const closeinpo = () => {
    setinpoIsShown(false);
  }
// -----------------------------------------------------------
  const openSignInHandler = () => {
    setSignInIsShown(true);
  }

  const closeSignInHandler = () => {
    setSignInIsShown(false);
  }

  const openSignUpHandler = () => {
    setSignUpIsShown(true);
  }

  const closeSignUpHandler = () => {
    setSignUpIsShown(false);
  }
  return (
    <div className='App'>
       {signInIsShown && <SignIn onClose={closeSignInHandler} />}
       {signUpIsShown && <SignUp onClose={closeSignUpHandler} />}

       {/* ---------------------------------------------------- */}
       {inpoIsShown && <Inposet onClose={closeinpo}/>}
       
       {/* ---------------------------------------------------- */}
       
      <Header onSignInOpen={openSignInHandler} onSignUpOpen={openSignUpHandler}/>
      <Main openinpo={openinpo}/>
      <Footer />
    </div>
  )
}

export default App
