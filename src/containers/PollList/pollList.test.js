import React from 'react'
import { PollList } from './index'
import poll from '../../poll'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('PollList', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      customData: poll.polls,
      currentID: 0
    }

    const wrapper = shallow(<PollList {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should change state on prop change', () => {
    const prevProps = {
      customData: poll.polls,
      currentID: 1
    }
    const newProps = {
      customData: poll.polls,
      currentID: 2
    }
    const state = {
      indexArray: [0, 1, 3, 4]
    }
    const wrapper = shallow(<PollList {...prevProps} />)
    wrapper.setProps(newProps)
    expect(wrapper.state()).toStrictEqual(state)
  })
})
