import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Secure Connectivity",
      description: "End-to-end encryption ensures your data stays private and secure across all networks.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15c-1.5 0-4-1.5-4-4V7a4 4 0 018 0v4c0 2.5-2.5 4-4 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 19h12M6 19a2 2 0 01-2-2v-4h16v4a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "High Performance",
      description: "Lightning-fast data transfer and ultra-low latency for uninterrupted service.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Scalability",
      description: "Easily scale your network as your business grows, without losing performance.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16M4 10h16M4 16h16M4 22h16" />
        </svg>
      )
    },
    {
      title: "24/7 Monitoring",
      description: "Always-on monitoring with instant alerts to keep your network healthy.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18V3H3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v18M16 3v18" />
        </svg>
      )
    },
    {
      title: "AI Optimization",
      description: "AI-powered algorithms optimize traffic flow for maximum efficiency.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M20 12h2M2 12H0M16.95 7.05l1.414-1.414M4.636 19.364l-1.414 1.414M16.95 16.95l1.414 1.414M4.636 4.636L3.222 3.222" />
        </svg>
      )
    },
    {
      title: "Global Coverage",
      description: "Seamless global network coverage ensuring fast connections worldwide.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 010 20" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#07282C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-[#71D6CE] ">Powerful Network Features</h2>
          <p className="text-lg text-gray-200">
            Everything you need for a secure, fast, and reliable network platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#ffffff0d] p-8 rounded-2xl shadow-md shadow-zinc-100 hover:shadow-xl transition">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
