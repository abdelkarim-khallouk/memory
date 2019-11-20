import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="memory" >
        <GuessCount guesses={3}></GuessCount>
        <Card card="💣" feedback="hidden" />
        <Card card="❤️" feedback="justMatched" />
        <Card card="♠️" feedback="justMismatched" />
        <Card card="😀" feedback="visible" />
        <Card card="🔔" feedback="justMatched" />
        <Card card="💰" feedback="hidden" />
      </div>
    )
  }
}

export default App