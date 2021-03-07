import React from 'react'
import * as TM from './topmenu.styled'

export const TopMenu = () => {
  return (
    <TM.Menu>
      <TM.MenuLink to='/'>Home</TM.MenuLink>
      <TM.MenuLink to='/counter'>Counter</TM.MenuLink>
      <TM.MenuLink to='/color'>ChnageColor</TM.MenuLink>
      <TM.MenuLink to='/math'>Math</TM.MenuLink>
    </TM.Menu>
  )
}