import { types } from './types'

export const chooseItem = id => ({
  type: types.CHOOSE_ITEM,
  id
})

export const voteItem = id => ({
  type: types.VOTE_ITEM,
  id
})
