'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={toggleTheme} className="rounded-xl bg-slate-100 p-2">
      {theme === 'dark' ? (
        <RiSunLine size={20} color="black" />
      ) : (
        <RiMoonFill size={20} />
      )}
    </button>
  )
}

export default ThemeSwitcher
