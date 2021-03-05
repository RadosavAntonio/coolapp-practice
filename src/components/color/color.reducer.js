import * as constant from "./color.constant"

export const initialState = {
  red: 120,
  blue: 0,
  green: 0,
}

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.STRIGA:
      console.log("a strigat", action.name)
      return state
    case constant.SETCOLOR:
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}