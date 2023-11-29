'use client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid' // Importing necessary icons
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import MenuOverlay from './MenuOverlay' // Importing MenuOverlay component
import NavLink from './NavLink'

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
]

const Navbar = () => {
  // State to control mobile menu visibility
  const [navbarOpen, setNavBarOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-10  bg-opacity-95">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-5 py-4">
        {/* Logo or brand link */}
        <Link
          href={'/'}
          className="text-2xl font-semibold dark:text-white md:text-5xl"
        >
          LOGO
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavBarOpen(!navbarOpen)} // Toggles navbarOpen state
            className="hover-border-white flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:text-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:flex-row md:space-x-8 md:p-0">
            {/* Mapping through navLinks to render navigation links */}
            {navLinks.map((link) => (
              <li key={link.title}>
                {' '}
                {/* Use unique ID if available instead of index */}
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <ThemeSwitcher />
          </ul>
        </div>
      </div>

      {/* Render the MenuOverlay component based on navbarOpen state */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  )
}

export default Navbar
