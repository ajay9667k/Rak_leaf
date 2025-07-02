import { useState } from 'react';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    comments: '',
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#07282C] text-white flex">
      {/* Left side - Form */}
      <div className="flex-1 p-8 lg:p-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-light text-center mb-4 text-teal-400">
            Get In Touch with Us for More Information
          </h1>
          <p className="text-center text-gray-300 mb-12">
            Have questions? We're ready to help!
          </p>

          <div className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name here"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name here"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Add email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Comments */}
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-300 mb-2">
                Comments / Questions <span className="text-red-400">*</span>
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Comments"
                rows={6}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-teal-500 bg-slate-700 border-slate-600 rounded focus:ring-teal-500 focus:ring-2"
                required
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-300">
                Agree on our terms and condition for using your submitted data?
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-800"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Contact Info */}
      <div className="w-80 bg-[#07282C] p-8 flex flex-col justify-center">
        <div className="space-y-8">
          {/* Cloudsion HQ */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Cloudsion HQ</h3>
            <div className="text-gray-300 space-y-2">
              <p>Jl. Danau Tamblingan</p>
              <p>No.180, Sanur, Denpasar</p>
              <p className="mt-4">
                <span className="inline-block mr-2">📞</span>
                <a href="tel:+62887110622814" className="text-teal-400 hover:text-teal-300">
                  (+62) 887-1106-22814
                </a>
              </p>
            </div>
          </div>

          {/* Support */}
          <div className=''>
            <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
            <p className="text-gray-300 mb-4">
              We're here to help with any questions you may have.
            </p>
            <p>
              <span className="inline-block mr-2">📧</span>
              <a href="mailto:support@domain.com" className="text-teal-400 hover:text-teal-300">
                support@domain.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}