import React from 'react';
import logo from './logo.svg';
import './App.css';

// Imports of the elements used within the application.
import Left from './components/Left'
import Main from './components/Main'
import Right from './components/Right'

function App() {
  return (
    <div className='application'>
      <Left></Left>
      <Main></Main>
      <Right></Right>
    </div>
  )
}

export default App
