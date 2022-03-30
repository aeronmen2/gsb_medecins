import React  from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";


const NavUnlisted = styled.ul`
  
  display: flex;
  a {
    text-decoration: none;
  }
  li {
    text-align: center;
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;


const links = [
    {name: "Accueil",path:"/"},
    {name: "Médecins",path:"/medecins"},
    {name: "Départements",path:"/departements"},
    {name: "Pays",path:"/pays"},
];

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" width={270}/>
                <NavUnlisted>
                    {links.map((link,index) => (
                        <NavLink key={index} to={link.path} exact activeclassname="current">
                            <li>{link.name}</li>
                        </NavLink>
                    ))}
                </NavUnlisted>
        </div>
    );
}



export default Navbar;
