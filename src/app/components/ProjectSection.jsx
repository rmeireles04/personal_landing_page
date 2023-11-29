// Import necessary modules and components
'use client'
import React, { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'
import ProjectTag from './ProjectTag'

// Define ProjectSection component
const ProjectSection = () => {
  // State for managing the selected tag
  const [tag, setTag] = useState('All')

  // Create a reference for the IntersectionObserver
  const ref = useRef(null)

  // Assuming useInView is correctly implemented and imported
  // useInView hook checks if the component is in the viewport
  const isInView = useInView(ref, { once: true })

  // Function to handle tag changes
  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  // Filter projects based on the selected tag
  const filteredProjects = ProjectData.filter((project) =>
    project.tags.includes(tag),
  )

  // Return JSX for rendering
  return (
    <>
      {/* Display heading for the projects section */}
      <h2
        className="mb-8 mt-4 text-center text-4xl font-bold text-white md:mb-12"
        id="projects"
      >
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      {/* Display projects in a grid layout */}
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {/* Map through filtered projects and render ProjectCard component */}
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  )
}

// Export the ProjectSection component as default
export default ProjectSection
