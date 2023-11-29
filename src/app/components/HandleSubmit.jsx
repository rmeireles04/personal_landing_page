'use server'
import EmailTemplate from '@/app/components/EmailTemplate' // Adjust the path accordingly
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

//const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL

export const handleSubmit = async (formData) => {
  resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [fromEmail],
    subject: 'subject',
    //reply_to: email,
    text: 'dasdsds',
    // Render EmailTemplate component
  })
}
