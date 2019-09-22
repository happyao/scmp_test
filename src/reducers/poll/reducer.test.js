import { types } from '../../actions/types'
import reducer from './reducer'
import poll from '../../poll'
describe('Reducer', () => {
  let initialState = null
  beforeEach(() => {
    initialState = {
      customData: poll.polls,
      currentID: 0
    }
  })
  it('should return default state', () => {
    const newState = reducer(initialState, {})
    expect(newState).toEqual(initialState)
  })

  it('should choose one item', () => {
    const resultState = {
      ...initialState,
      currentID: 2
    }
    const newState = reducer(initialState, { type: types.CHOOSE_ITEM, id: 2 })
    expect(newState).toEqual(resultState)
  })

  it('should choose one item', () => {
    const initialState2 = {
      ...initialState,
      currentID: 2
    }
    const result = { id: 5, label: 'Hopeful', vote: 3 }
    const newState = reducer(initialState2, { type: types.VOTE_ITEM, id: 5 })
    expect(
      newState.customData[initialState2.currentID].answer.options[0]
    ).toStrictEqual(result)
    const result2 = { id: 6, label: 'Doubtful', vote: 3 }
    const newState2 = reducer(initialState2, { type: types.VOTE_ITEM, id: 6 })
    expect(
      newState2.customData[initialState2.currentID].answer.options[1]
    ).toStrictEqual(result2)
  })
})
