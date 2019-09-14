import React, { Component } from 'react'
import './style.css'

class PollItem extends Component {
  render () {
    var date = new Date(this.props.content.publishedDate) + ''

    return (
      <div className='poll-item' onClick={this.props.onClick}>
        <div>{this.props.content.title}</div>
        <div>{date}</div>
      </div>
    )
  }
}
export default PollItem
