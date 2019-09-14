import { types } from '../../actions/types'
import customData from '../../poll'
export const initialState = {
  currentID: 0,
  customData: customData.polls
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHOOSE_ITEM:
      return { ...state, currentID: action.id }

    default:
      return state
  }
}
