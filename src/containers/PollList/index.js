import { connect } from 'react-redux'
import './style.css'
import React, { Component } from 'react'
import PollItem from '../../components/PollItem'
import { chooseItem } from '../../actions'

class PollList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      indexArray: [...Array(this.props.customData.length).keys()].splice(1)
    }
  }
  componentDidUpdate (prevProps) {
    if (prevProps.currentID !== this.props.currentID) {
      var pollIndex = [...Array(this.props.customData.length).keys()]
      // console.log([...Array(this.props.customData.length).keys()])
      // [0..4]
      var indexArray = pollIndex.filter(item => item !== this.props.currentID)
      this.setState({
        indexArray: indexArray
      })
    }
  }
  render () {
    var { indexArray } = this.state
    var pollList = indexArray.map(item => {
      return (
        <PollItem
          key={item}
          content={this.props.customData[item]}
          onClick={() => this.props.chooseItem(item)}
        />
      )
    })
    return <div className='row poll-list'>{pollList}</div>
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

export { PollList }
