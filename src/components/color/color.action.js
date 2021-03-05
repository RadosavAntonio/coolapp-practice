import * as constant from "./color.constant"

export const strigaAction = name => ({
  type: constant.STRIGA,
  name
})

export const setColor = (value, name) => ({
  type: constant.SETCOLOR,
  value,
  name,
})