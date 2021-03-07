import React, {useState} from 'react'
import * as CS from './counter.styled'

export const Counter = () => {
  // console.log("Apasaaaaaaaaaaaaaa")
  const [value, setValue] = useState(10)

  const handleIncrease = (value) => {
    console.log("inc")
    return setValue(value+1)
  }
  
  const handleDecrease = (value) => {
    console.log("dec")
    return setValue(value-1)
  }


  return(
    <CS.Container>
      <div>
        Valeu: {value}
      </div>
      <button onClick={() => handleIncrease(value)}>
        increase
      </button>
      <button onClick={() => handleDecrease(value)}>
        decrease
      </button>
    </CS.Container>
  )
}