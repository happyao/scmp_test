import { connect } from 'react-redux'
import OptionButtons from '../OptionButtons'
import React, { Component } from 'react'
import './style.css'
import VoteBar from '../../components/VoteBar'
class CurrentPoll extends Component {
  render () {
    var date =
      new Date(this.props.customData[this.props.currentID].publishedDate) + ''
    var options = this.props.customData[this.props.currentID].answer.options

    var votes_count = options.reduce((count, item) => {
      return count + item.vote
    }, 0)

    var colors =
      options.length === 2
        ? ['blue', 'yellow']
        : ['white', 'blue', 'yellow', 'green', 'purple', 'red']
    console.log(options, colors)
    return (
      <div className='current-poll'>
        <h2>Today's poll</h2>
        <div class='row'>
          <div class='col-12 col-md-6'>
            <div>{this.props.customData[this.props.currentID].title}</div>
            {date}
            <OptionButtons />
          </div>

          <div class='col-12 col-md-6'>
            <VoteBar options={options} colors={colors} />
          </div>
        </div>
        <div>Total number of votes recorded {votes_count}</div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentID: state.poll.currentID,
  customData: state.poll.customData
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPoll)
