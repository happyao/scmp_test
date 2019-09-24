import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import CurrentPoll from '../../containers/CurrentPoll'
import PollList from '../../containers/PollList'
import { getData } from '../../actions'
import {normalize, schema} from 'normalizr'
class App extends Component {
  componentDidMount () {
    // let xhr = new XMLHttpRequest()

    // xhr.open('GET', 'poll.json')
    // xhr.responseType = 'json'
    // xhr.send()
    // xhr.onerror = function () {
    //   alert(`Network Error`)
    // }

    // xhr.onload = function () {
    //   console.log(this)
    //   if (xhr.status !== 200) {
    //     alert(`Error ${xhr.status}: ${xhr.statusText}`)
    //   } else {
    //     let responseObj = xhr.response
    //     console.log(responseObj.polls)
    //     this.props.getData(responseObj.polls)
    //   }
    // }.bind(this)

    // xhr.timeout = 10000

    // we can also use ajax fetch
    this.getJson()
  }

  async getJson () {
    let response = await fetch('poll.json')
    let data = await response.json()
    const option = new schema.Entity('options',{});
    const poll = new schema.Entity('polls',{"answer":{options:[option]}})
    const normalizedData = normalize(data, { polls: [poll] });
    console.log(normalizedData)
    console.log(normalizedData.result.polls)
    //this.props.getData(data.polls)
    this.props.getData(normalizedData.entities)
    console.log('getjson', data.polls)
  }

  render () {
    return (
      <div className='App'>
        {this.props.customData.length !== 0 && (
          <React.Fragment>
            <CurrentPoll />
            <PollList />
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  customData: state.poll.customData
})

const mapDispatchToProps = dispatch => ({
  getData: data => dispatch(getData(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export { App }
