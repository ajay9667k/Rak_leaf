import React from 'react';

const Rackleafblog = () => {
  const articles = [
    {
      id: 1,
      date: "June 8, 2023",
      title: "Achieving Scalability and Resilience with Cloud Management Strategies",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 2,
      date: "June 8, 2023",
      title: "The Role of Cloud Management in Driving Business Efficiency",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 3,
      date: "June 8, 2023",
      title: "Securing Your Cloud Environment: Best Practices for Data Protection",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 4,
      date: "June 7, 2023",
      title: "Optimizing Costs in the Cloud: Strategies for Cost-effective",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 5,
      date: "June 7, 2023",
      title: "Securing Your Cloud Environment: Best Practices and Strategies",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 6,
      date: "June 7, 2023",
      title: "Cloud Management Tools: Simplifying Operations",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 7,
      date: "June 7, 2023",
      title: "Cloud 101: Understanding the Basics and Benefits",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 8,
      date: "June 7, 2023",
      title: "Optimizing Cloud Costs: Best Practices for Cloud Financial",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 9,
      date: "June 7, 2023",
      title: "Streamlining Cloud Operations with DevOps and Cloud Management",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text mb-8">
            Latest Articles and Expert Insights
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Eget mi proin sed libero enim sed faucibus viverra maecenas accumsan lacus vel facilisis volutpat 
            viverra maecenas accumsan it incididunt ut labore et dolore magna aliqui ut enim ad minim.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-teal-500/20 hover:border-teal-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-teal-400 text-sm font-medium tracking-wide uppercase">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {article.title}
                </h3>
                
                {/* Read More Button */}
                <div className="flex items-center text-teal-400 text-sm font-medium group-hover:text-teal-300 transition-colors duration-300">
                  <span>Read More</span>
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105 transform">
            Load More
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="relative bg-slate-800/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              Get Started with Our Powerful Cloud
              <br />
              <span className="text-transparent bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text">
                Management Service Today
              </span>
            </h2>
            
            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter Your e-mail address.."
                className="flex-1 w-full sm:w-auto px-6 py-4 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 rounded-xl border-2 border-transparent focus:border-teal-400 focus:outline-none transition-all duration-300 text-lg min-w-80"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105 transform text-lg whitespace-nowrap">
                Start Free Trial
              </button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-teal-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Rackleafblog;