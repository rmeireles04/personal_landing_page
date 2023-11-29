'use server'
import Contact_Form_Email from '@/app/components/Contact_Form_Email'
import React from 'react'
import { Resend } from 'resend'

const fromEmail = process.env.FROM_EMAIL
const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (formData) => {
  const message = formData.message
  const senderEmail = formData.email
  const subject = formData.subject

  console.log(message, senderEmail, subject)

  try {
    const data = await resend.emails.send({
      from: 'PROFILE_SITE <onboarding@resend.dev>',
      to: fromEmail,
      subject: subject,
      reply_to: senderEmail,
      //The code bellow is the same but this is jsx and the other is in js
      //<Contact_Form_Email message={message} senderEmail={senderEmail} />, // Render EmailTemplate component
      react: React.createElement(Contact_Form_Email, {
        message: message,
        senderEmail: senderEmail,
      }),
    })

    // Handle success scenario if needed

    return {
      success: true,
    }
  } catch (error) {
    console.error('Error sending email:', error)

    return {
      error: getErrorMessage(error),
    }
  }
  // Handle other conditions if needed
}
