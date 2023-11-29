// Import necessary modules and components
'use client'
import Image from 'next/image'
import React from 'react'

// Import the TypeAnimationComponent
import TypeAnimationComponent from './TypeAnimationComponent'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Content Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-6 text-4xl font-extrabold dark:text-white sm:text-5xl lg:text-6xl">
            <span className="from-primary-400 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent">
              Hello, I&apos;m {''}
            </span>
            <br></br>
            {/* Using the TypeAnimationComponent */}
            <TypeAnimationComponent />
          </h1>
          <p className="test-base mb-6 text-justify text-[#ADB7BE] sm:text-lg lg:text-xl">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div>
            {/* Improved button accessibility with aria-label */}
            <button
              className="from from-primary-400 to-secondary-400 mr-4 mt-3 w-full rounded-3xl bg-gradient-to-br px-0.5 py-0.5 text-white hover:bg-slate-800 sm:w-full lg:w-80"
              aria-label="Hire me"
            >
              <span className="block rounded-3xl bg-[#121212] px-5 py-2 font-semibold hover:bg-slate-800">
                Hire Me
              </span>
            </button>
            <button className=""></button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="relative h-[250px] w-[250px] rounded-full bg-[#181818] sm:ml-16 lg:h-[350px] lg:w-[350px]">
            {/* Adjusted alt text for image */}
            <Image
              src={'/images/hero_image.png'}
              alt="Hero Image - Profile Picture"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:ml-6"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
