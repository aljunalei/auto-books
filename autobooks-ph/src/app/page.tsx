'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, BarChart3, FileText, TrendingUp, Shield ,icons } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import { title } from 'process';

function LandingPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [issubmitting, setIssubmitting] = useState(false);
  const [submitmessage, setSubmitMessage] = useState("");

  const servicesData  =[
    {
    title: "Automated Bookkeeping",
    description: "Save 10+ hours per month with AI-powered transaction categorization and automated financial reporting.",
    features: [
       "Transaction import",
        "Categorization",
        "Real-time insights",
      ], icon:<TrendingUp className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Tax Compliance",
      description: "Stay compliant with BIR regulations and simplify your tax filing process.",
      features: [
        "Quarterly tax filings",
        "Tax optimization",
        "Compliance tracking",
      ], icon:<FileText className="h-8 w-8 text-blue-600" />
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AutoBooks
          </h1>
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
              <span className='text-gray-500 text-sm italic'>&quot;We&apos;ve helped over 200 Filipino businesses automate their books and focus on growth.&quot;</span>
            </li>
          </ul>
        </div>
</div>
</div>



      </section>



      {/* Services Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          {/* Contact form will go here */}

          <div className='grid md:grid-cols-2 gap-12 '>

            <div>
             
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