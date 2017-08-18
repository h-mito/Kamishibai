import {
  HISTORY_PUSH,
  HISTORY_BACK,
} from "../constants/index"

const history = (state=["/top"], action) => {
  let newHistory

  switch (action.type) {
    case HISTORY_PUSH:
      newHistory = state.slice()
      newHistory.push(action.pathname)

      return newHistory
    case HISTORY_BACK:
      newHistory = state.slice()
      newHistory.pop()

      return newHistory

    default:
      return state
  }
}

export default history
