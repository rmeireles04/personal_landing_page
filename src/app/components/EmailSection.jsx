'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { POST } from '../api/send/route'
import { handleSubmit } from './HandleSubmit'
//import GithubIcon from '../../../public/github-icon.svg'
//import LinkedinIcon from '../../../public/linkedin-icon.svg'

const EmailSection = () => {
  // State to manage form data and success message
  const [formData, setFormData] = useState({
    email: '', // Initial state for email field
    subject: '', // Initial state for subject field
    message: '', // Initial state for message field
  })
  const [successMessage, setSuccessMessage] = useState('') // State to manage success message

  // Function to update form data on input change
  const handleChange = (e) => {
    // Update the corresponding form field in formData state when there's an input change
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission behavior (page reload)

    try {
      // Call the POST function to send email with formData
      const response = await POST(formData)

      if (response.success) {
        // If the email is sent successfully:
        // Clear form fields and set a success message
        setFormData({ email: '', subject: '', message: '' })
        setSuccessMessage('Email sent successfully!')
      } else {
        // Handle error scenario or display an error message
        console.error('Error sending email:', response.error)
        // Additional logic for error handling or error message display
      }
    } catch (error) {
      // Handle error scenario or display an error message
      console.error('Error sending email:', error)
      // Additional logic for error handling or error message display
    }
  }

  return (
    <section
      id="contact"
      className="relative my-12 grid gap-4 py-24 md:my-12 md:grid-cols-2"
    >
      <div className="from-primary-900 -translate-1/2 absolute -left-4 top-3/4 z-0 h-80 w-80 -translate-x-1/2 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent blur-lg"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">
          Let&apos;s Connect
        </h5>
        <p className="mb-4 max-w-md text-[#ADB7BE]">
          {' '}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        {/* <div className="socials flex flex-row gap-2"> 
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
  </div> */}
      </div>
      <div>
        {/* Where the action is take for send the data on the form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="mb-6 block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="mb-6 block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="mb-6 block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 w-full rounded-lg px-5 py-2.5 font-medium text-white"
          >
            Send Message
          </button>

          {/* Display the success message if it exists */}
          {successMessage && (
            <div
              className="relative mt-4 rounded border border-green-400 bg-green-100 px-4 py-4 text-green-700"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <br></br>
              <span className="block sm:inline">{successMessage}</span>
              <span
                className="absolute bottom-0 right-0 top-0 px-4 py-3"
                onClick={() => setSuccessMessage('')}
              >
                &times;
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default EmailSection
