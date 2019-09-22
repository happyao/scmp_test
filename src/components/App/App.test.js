import React from 'react'
import { App } from './App'
import poll from '../../poll'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('App', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      customData: poll.polls
    }

    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
