import React from 'react'
import style from './Header.module.sass'
import NavItem from './NavItem'

function Header () {
  return (
    <header className={style.header}>
      <nav className={style.navMenu}>
        <ul className={style.navList}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/calendar'>Calendar</NavItem>
          <NavItem to='/slider'>ImageSlider</NavItem>
          <NavItem to='/todo'>Todo list</NavItem>
        </ul>
      </nav>
    </header>
  )
}

export default Header
