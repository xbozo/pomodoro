import * as C from './styles'

import logoIgnite from '../../assets/IgniteLogo.svg'
import { Scroll, Timer } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <C.HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </C.HeaderContainer>
  )
}
