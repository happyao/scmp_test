import React from 'react'
import { OptionButtons } from './index'
import poll from '../../poll'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as actions from '../../actions'
describe('OptionButtons', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      currentID: 2,
      answers: poll.polls[2].answer,
      colors: ['#143b6b', '#e57335']
    }

    const wrapper = shallow(<OptionButtons {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders right component given the required props', () => {
    const props = {
      currentID: 3,
      answers: poll.polls[3].answer,
      colors: ['#143b6b', '#e57335']
    }
    const wrapper = shallow(<OptionButtons {...props} />)
    expect(wrapper.find('button').length).toBe(6)
  })

  it('inactive buttons when click single type poll option', () => {
    const props = {
      currentID: 2,
      answers: poll.polls[2].answer,
      colors: ['#143b6b', '#e57335'],
      voteItem: jest.fn()
    }

    const state = {
      disabled: true,
      historicalId: [2]
    }

    actions.voteItem = jest.fn()
    const wrapper = shallow(<OptionButtons {...props} />)

    wrapper
      .find('button')
      .at(0)
      .simulate('click', { target: { style: { backgroundColor: '#fffff' } } })
    expect(wrapper.state()).toStrictEqual(state)
    expect(
      wrapper
        .find('button')
        .at(0)
        .props()['disabled']
    ).toBe(true)
  })

  it('inactive buttons when click multi type poll option', () => {
    const props = {
      currentID: 3,
      answers: poll.polls[3].answer,
      colors: ['#143b6b', '#e57335'],
      voteItem: jest.fn()
    }

    const state = {
      disabled: false,
      historicalId: [3]
    }

    actions.voteItem = jest.fn()
    const wrapper = shallow(<OptionButtons {...props} />)

    wrapper
      .find('button')
      .at(0)
      .props()
      .onClick({
        target: { style: { backgroundColor: '#fffff' } }
      })
    expect(props.voteItem.mock.calls.length).toBe(1)
    expect(wrapper.state()).toStrictEqual(state)
  })
})
