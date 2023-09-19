import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <nav>
     <ul>
        <li> <a href=""><CardWidget/></a></li>
        <li><a href="">Contacto</a></li>
        <li><a href="">About</a></li>
     </ul>  
    </nav>
  )
}

export default NavBar