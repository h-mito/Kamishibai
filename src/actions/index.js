import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  HISTORY_PUSH,
  HISTORY_BACK,
} from "../constants/index"

export const counter_increment = () => {
  return {
    type: COUNTER_INCREMENT,
  }
}

export const counter_decrement = () => {
  return {
    type: COUNTER_DECREMENT,
  }
}

export const history_push = (pathname) => {
  return {
    type: HISTORY_PUSH,
    pathname: pathname,
  }
}

export const history_back = () => {
  return {
    type: HISTORY_BACK,
  }
}
