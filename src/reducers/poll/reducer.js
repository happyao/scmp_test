import { types } from '../../actions/types'
// import customData from '../../poll'

export const initialState = {
  currentID: 0,
  customData: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return { ...state, customData: action.customData }
    case types.CHOOSE_ITEM:
      return { ...state, currentID: action.id }
    case types.VOTE_ITEM:
      return {
        ...state,
        customData: state.customData.map(cd => {
          if (state.currentID === cd.id - 1) {
            return {
              ...cd,
              answer: {
                ...cd.answer,
                options: cd.answer.options.map(item => {
                  if (item.id === action.id) {
                    return { ...item, vote: item.vote + 1 }
                  } else {
                    return item
                  }
                })
              }
            }
          } else {
            return cd
          }
        })
      }

    default:
      return state
  }
}
