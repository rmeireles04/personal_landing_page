import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? 'text-white border-secondary-300'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white'
  return (
    <button
      className={`${buttonStyle} cursor-pointer rounded-3xl border-2  px-5 py-2 text-xl`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}

export default ProjectTag
