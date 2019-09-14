import { connect } from 'react-redux'

import React, { Component } from 'react'
import './style.css'
class OptionButtons extends Component {
  render () {
    var list = this.props.customData[this.props.currentID].answer.options.map(
      item => {
        return <button key={item.id}>{item.label}</button>
      }
    )
    return <div className='options'>{list}</div>
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
)(OptionButtons)
