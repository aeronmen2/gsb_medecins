import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/medecins' activeStyle>
            Médecins
          </NavLink>
          <NavLink to='/departements' activeStyle>
            Départements
          </NavLink>
          <NavLink to='/pays' activeStyle>
            Pays
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;