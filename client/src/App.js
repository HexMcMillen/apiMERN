import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Characters from './views/Characters';
import OneCharacter from './views/OneCharacter';
import Species from './views/Species';
import Locations from './views/Locations';
import Episodes from './views/Episodes';
import BottomNav from './components/BottomNav';
import SignIn from './views/SignIn';

function App() {

  return (
    <div className='backGround'>
      <BottomNav />
      <Routes>
        <Route element={ <HomePage /> } path='/' />
        <Route element={ <Characters /> } path='/characters/:page' />
        <Route element={ <OneCharacter /> } path='/character/:id' />
        <Route element={ <Species /> } path='/:page/:species' />
        <Route element={ <Locations /> } path='/locations' />
        <Route element={ <Episodes /> } path='/episodes' />
        <Route element={ <SignIn /> } path='/createAccount/signIn' />
      </Routes>
    </div>
  );
}

export default App;
