import { connect } from 'react-redux'
import OptionButtons from '../OptionButtons'
import React, { Component } from 'react'
import './style.css'
import VoteBar from '../../components/VoteBar'
import { calculateDate } from '../../Utils/helper'
class CurrentPoll extends Component {
  render () {
    var date = new Date(
   
      this.props.customData.polls[this.props.currentID].publishedDate * 1000
    )

    var publish_date = calculateDate(date)
    var options = this.props.customData.polls[this.props.currentID].answer.options

    var votes_count = Object.values(options).reduce((count, item) => {
      return count + item.vote
    }, 0)

    var colors =
      options.length === 2
        ? ['#143b6b', '#e57335']
        : ['#e57335', '#FFB74D', '#81C784', '#649188', '#47493C', '#143b6b']

    return (
      <div className='current-poll'>
        <div id='mark' />
        <h3>Today's poll</h3>

        <div className='row content'>
          <div className='col-12 col-md-6'>
            <div id='question'>
              {this.props.customData.polls[this.props.currentID].title}
            </div>
            <label>{publish_date}</label>
            <OptionButtons
              answers={this.props.customData.polls[this.props.currentID].answer}
              colors={colors}
            />
          </div>

          <div className='col-12 col-md-6'>
            <VoteBar options={options} colors={colors} />
          </div>
        </div>
        <div id='total-number'>
          Total number of votes recorded: {votes_count}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentID: state.poll.currentID,
  customData: state.poll.customData
})

export default connect(
  mapStateToProps,
  null
)(CurrentPoll)
