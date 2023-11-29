import React from 'react'

// TabButton component definition
const TabButton = ({ active, selecTab, children }) => {
  // Determines the classes for the button based on its active state
  const buttonClasses = active
    ? 'text-white border-b border-secondary-400' // Classes for an active tab
    : 'text-[#ADB7BE]' // Classes for an inactive tab

  // Renders the button component
  return (
    <button onClick={selecTab}>
      {/* Paragraph element representing the tab text */}
      <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
        {children} {/* Renders the content inside the TabButton */}
      </p>
    </button>
  )
}

export default TabButton // Exports the TabButton component
