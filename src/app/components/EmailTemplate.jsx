// ./src/app/components/EmailTemplate.js
// This component contains the EmailTemplate logic and should not import `react-dom/server`

import React from 'react'

const EmailTemplate = ({ subject, message }) => {
  // Your EmailTemplate logic here
  return (
    <>
      <h1>{subject}</h1>
      <p>{message}</p>
    </>
  )
}

export default EmailTemplate
