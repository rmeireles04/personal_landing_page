import { useState } from 'react'
import { POST } from '../api/send/route'

const EmailFormLogic = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await POST(formData)

      if (response.success) {
        setFormData({ email: '', subject: '', message: '' })
        setSuccessMessage('Email sent successfully!')
      } else {
        console.error('Error sending email:', response.error)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return {
    formData,
    successMessage,
    handleChange,
    handleSubmit,
  }
}

export default EmailFormLogic
