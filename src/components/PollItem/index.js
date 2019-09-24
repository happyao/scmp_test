import React, { Component } from 'react'
import './style.css'
import icon from '../../assets/icon.png'
import { calculateDate } from '../../Utils/helper'
import VoteBar from '../../components/VoteBar'
class PollItem extends Component {
  render () {
    var date = new Date(this.props.content.publishedDate * 1000)
    var publish_date = calculateDate(date)
    var options = this.props.content.answer.options
    var colors =
      options.length === 2
        ? ['#143b6b', '#e57335']
        : ['#e57335', '#FFB74D', '#81C784', '#649188', '#47493C', '#143b6b']
    return (
      <div
        className='col-12 col-md-5'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <VoteBar options={options} colors={colors} small />
        {/* <img alt='icon' id='icon' src={icon} /> */}
        <div className='poll-item' onClick={this.props.onClick}>
          <div
            style={{ fontSize: '1.5rem', color: '#26658f', fontWeight: 'bold' }}
          >
            {publish_date}
          </div>
          <div style={{ fontSize: '1.5rem' }}>{this.props.content.title}</div>
        </div>
      </div>
    )
  }
}
export default PollItem
