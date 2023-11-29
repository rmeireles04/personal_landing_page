import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

// ProjectCard component for displaying project details
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      {/* Image container with dynamic background image */}
      <div
        className="group relative h-52 rounded-t-xl md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            className="relative mr-3 h-10 w-10 rounded-full border-2 border-[#ADB7BE]  hover:border-white"
          >
            <CodeBracketIcon className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="relative h-10 w-10 rounded-full border-2 border-[#ADB7BE]  hover:border-white"
          >
            <EyeIcon className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] hover:text-white" />
          </Link>
        </div>
      </div>
      {/* Container for project details */}
      <div className="mt-3 rounded-b-xl bg-[#181818] px-4 py-6 text-white">
        {/* Title of the project */}
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        {/* Description of the project */}
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

// Export the ProjectCard component as default
export default ProjectCard
