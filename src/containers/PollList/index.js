import { connect } from 'react-redux'
import './style.css'
import React, { Component } from 'react'
import PollItem from '../../components/PollItem'
import { chooseItem } from '../../actions'

class PollList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      indexArray: [1, 2, 3, 4]
    }
  }
  componentDidUpdate (prevProps) {
    if (prevProps.currentID !== this.props.currentID) {
      var indexArray = [0, 1, 2, 3, 4].filter(
        item => item !== this.props.currentID
      )
      this.setState({
        indexArray: indexArray
      })
    }
  }
  render () {
    var { indexArray } = this.state
    return (
      <div className='poll-list'>
        <PollItem
          content={this.props.customData[indexArray[0]]}
          onClick={() => this.props.chooseItem(indexArray[0])}
        />
        <PollItem
          content={this.props.customData[indexArray[1]]}
          onClick={() => this.props.chooseItem(indexArray[1])}
        />
        <PollItem
          content={this.props.customData[indexArray[2]]}
          onClick={() => this.props.chooseItem(indexArray[2])}
        />
        <PollItem
          content={this.props.customData[indexArray[3]]}
          onClick={() => this.props.chooseItem(indexArray[3])}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentID: state.poll.currentID,
  customData: state.poll.customData
})

const mapDispatchToProps = dispatch => ({
  chooseItem: id => dispatch(chooseItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollList)
