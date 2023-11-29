// Importing necessary modules and components
'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

// Data for different tabs
const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      // Content for the 'Skills' tab
      <ul className="">
        <li>abc</li>
        <li>asdas</li>
        <li>ads</li>
        <li>sfsd</li>
        <li>erwefsd</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      // Content for the 'Education' tab
      <ul className="pl-14">
        <li>22313312313</li>
        <li>123131213</li>
        <li>131313112</li>
      </ul>
    ),
  },
  {
    title: 'Certificates',
    id: 'certificates',
    content: (
      // Content for the 'Certificates' tab with inline styling
      <ul style={{ paddingLeft: '9.5rem' }}>
        <li>afafdfafafsfa</li>
        <li>asdas</li>
        <li>ddffdsffsafsfasdf</li>
        <li>sfsd</li>
        <li>erwefsd</li>
      </ul>
    ),
  },
]

// AboutSection component
const AboutSection = () => {
  // State variables and transition hook
  const [tab, setTab] = useState('skills') // Current active tab
  const [isPending, startTransition] = useTransition() // For managing transitions

  // Function to handle tab changes
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  // Return JSX for rendering
  return (
    <section className="text-white" id="about">
      {/* Structure for displaying tabs, content, and other information */}
      <div className="grid items-center gap-8 px-4 py-8 sm:py-16 md:grid-cols-2 xl:gap-16 xl:px-16">
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          {/* Image component */}
          <Image src="/images/about_image.png" width={500} height={500} />
        </div>
        <div>
          {/* Heading and text content */}
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            {/* Placeholder text for the about me section */}I am a full stack
            web developer with a passion for creating interactive and responsive
            web applications. I have experience working with JavaScript, React,
            Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.
            I am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to work with
            others to create amazing applications.
          </p>

          {/* Tab buttons for different sections */}
          <div className="mt-8 flex flex-row">
            {/* Map through tab data to create TabButton components */}
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selecTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title} {/* Display tab titles */}
              </TabButton>
            ))}
          </div>

          {/* Render content based on selected tab */}
          <div className="mt-4">
            {/* Map through tab data to display content */}
            {TAB_DATA.map((item) => (
              <div key={item.id} className={tab === item.id ? '' : 'hidden'}>
                {item.content} {/* Display tab content */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection // Export AboutSection component
