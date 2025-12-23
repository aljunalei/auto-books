'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import Button from './ui/Button'

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>
  className?: string
}

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  // State for form data
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      if (onSubmit) {
        await onSubmit(formData)
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        // Default behavior if no onSubmit prop is provided
        const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })

        if (response.ok) {
          setSubmitMessage('Thank you for your message! We\'ll get back to you soon.')
          setFormData({ name: '', email: '', message: '' })
        } else {
          setSubmitMessage('Something went wrong. Please try again.')
        }
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <Button 
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {submitMessage && (
          <div className={`p-4 rounded-lg text-center ${
            submitMessage.includes('Thank you') 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  )
}