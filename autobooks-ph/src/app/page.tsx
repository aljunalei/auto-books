//PAGE.TSX
'use client';

import { Mail, Phone, MapPin, CheckCircle, BarChart3, FileText, TrendingUp } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import Heading from '@/components/ui/Heading';
import ContactForm from '@/components/ContactForm';
function LandingPage() {

  const servicesData = [
    {
      title: "Automated Bookkeeping",
      description: "Save 10+ hours per month with AI-powered transaction categorization and automated financial reporting.",
      features: [
        "Transaction import",
        "Categorization",
        "Real-time insights",
      ], icon: <TrendingUp className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Tax Compliance",
      description: "Stay compliant with BIR regulations and simplify your tax filing process.",
      features: [
        "Quarterly tax filings",
        "Tax optimization",
        "Compliance tracking",
      ], icon: <FileText className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Financial Analytics",
      description: "Get actionable insights from your financial data to make smarter business decisions.",
      features: [
        "Weekly summaries",
        "Performance analysis",
        "Growth insights",
      ], icon: <BarChart3 className="h-8 w-8 text-blue-600" />
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className='max-w-6xl mx-auto'>
          <div className="grid md:grid-cols-2 gap-8">
            <div>        <div className="space-y-6">
              <Heading level={1} className="mb-6">
                 AutoBooks
              </Heading>
              <span className='text-xl text-gray-600 mb-8'>AutoBooks automates your bookkeeping with AI and QuickBooks Online. Get BIR-ready financial reports in minutes, not days, and focus on growing your business.</span>
            </div>
              <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg'>
                  Get Started
                </button>
                <button className='bg-gray-300 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors text-lg'>
                  Schedule a Demo
                </button>
              </div></div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className='mb-4 text-xl font-semibold'>Why Choose AutoBooks?</h3>
              <ul className='space-y-2 text-left'>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-green-600' />
                  <span className=''>Save 10+ hours per month on bookkeeping</span>
                </li>
                <li className='flex item-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-green-600' />
                  <span className=''>Compliant with BIR regulations</span>
                </li>
                <li className='flex item-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-green-600' />
                  <span className=''>Real-time financial insights</span>
                </li>
                <li className='flex item-center gap-2 mt-4'>
                  <hr className="w-full border-gray-300" />
                </li>
                <li className='flex item-center gap-2'>
                  <span className='text-gray-500 text-sm italic'>&quot;We&apos;ve helped over 200 businesses automate their books and focus on growth.&quot;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>



      </section>



      {/* Services Section */}
      <section className="py-15 px-4">
        <div className="max-w-6xl mx-auto">
          <Heading level={2} className="text-center mb-12">
            Our Services
          </Heading>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Services */}

            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
              />
            ))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Get In Touch
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? We&apos;re here to help!
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
<ContactForm
  onSubmit={async (data) => {
    try {
      // Call our API route instead of n8n directly
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Return success (this helps ContactForm show the right message)
      return Promise.resolve()
      
    } catch (error) {
      console.error('Submission error:', error)
      throw new Error('Failed to submit form')
    }
  }}
/>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <Heading level={3} className='mb-6'>
                  Contact Information
                </Heading>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-gray-600">Autobooks@autobooks.ph</p>
                      <p className="text-gray-600">autobooks-support@autobooks.ph</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-gray-600">+63 947 744 5999</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Office</h4>
                      <p className="text-gray-600">
                        079 Business Center<br />
                        Makati City, Metro Manila<br />
                        Philippines 1200
                      </p>
                      <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 AutoBooks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage;