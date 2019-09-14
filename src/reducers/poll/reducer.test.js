import { types } from '../../actions/types'
import reducer from './reducer'
import { initialState } from './reducer'

describe('Reducer', () => {
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
})
