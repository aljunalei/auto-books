  //CONTACTFORM.TSX
  'use client'

  import { useState } from 'react'
  import Button from '@/components/ui/Button';

  interface ContactFormData {
    name: string  
    email: string
    message: string
  }

  interface ContactFormProps {
    onSubmit: (data: ContactFormData) => Promise<void>
    className?: string
  }

  export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
      name: '',
      email: '',
      message: ''
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitMessage('')

      try {
        await onSubmit(formData)
        //Confirmation message
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.')
        
        // Clear the form
        setFormData({ name: '', email: '', message: '' })
        
      } catch (error) {
        setSubmitMessage('Failed to send message. Please try again.')
        console.error('Form submission error:', error)
      } finally {
        setIsSubmitting(false)
      }
    }

    return (
      <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
        <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
        
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