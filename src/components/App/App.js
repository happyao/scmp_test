import React, { Component } from 'react'
import './App.css'
import CurrentPoll from '../../containers/CurrentPoll'
import PollList from '../../containers/PollList'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <CurrentPoll />
        <PollList />
      </div>
    )
  }
}

export default App
