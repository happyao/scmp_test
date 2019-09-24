import { connect } from 'react-redux'

import React, { Component } from 'react'
import { voteItem } from '../../actions'
import './style.css'
class OptionButtons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      disabled: false,
      historicalId: []
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.currentID !== prevProps.currentID) {
      if (this.state.historicalId.indexOf(this.props.currentID) === -1) {
        console.log(this.state.historicalId, this.props.currentID)
        this.setState({
          disabled: false
        })
      } else {
        this.setState({
          disabled: true
        })
      }
    }
  }

  selectItem = (event, item) => {
    this.props.voteItem(item.id)
    event.target.style.backgroundColor = 'grey'
    if (this.props.answers.type === 'Single') {
      this.setState({
        disabled: true,
        historicalId: this.state.historicalId.concat(this.props.currentID)
      })
    } else if (this.props.answers.type === 'Multi') {
      event.target.disabled = true
      this.setState({
        historicalId: this.state.historicalId.concat(this.props.currentID)
      })
    }
  }

  render () {
    var { disabled } = this.state
    var { answers, colors } = this.props
    var list = answers.options.map((item, index) => {
      return (
        <button
          disabled={disabled}
          key={item.id}
          onClick={event => this.selectItem(event, item)}
          style={{ backgroundColor: colors[index] }}
        >
          {item.label}
        </button>
      )
    })
    return (
      <React.Fragment>
        <div className='options'>{list}</div>
        <div
          style={{
            visibility: disabled ? 'visible' : 'hidden',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#143b6b'
          }}
        >
          You have submitted your answer.
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  currentID: state.poll.currentID
})

const mapDispatchToProps = dispatch => ({
  voteItem: id => dispatch(voteItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionButtons)

export { OptionButtons }
