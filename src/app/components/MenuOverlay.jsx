import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import NavLink from './NavLink'

// With this piece of code it will be able to create a navigation component that includes the navigation links that are defined in the navigation component itself and the navigation links that are defined in the navigation component.

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => (
        <il key={index}>
          <NavLink href={link.path} title={link.title} />
        </il>
      ))}
      <ThemeSwitcher />
    </ul>
  )
}

export default MenuOverlay
