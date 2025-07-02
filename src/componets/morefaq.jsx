import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Morefaq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What types of cloud solutions do you offer?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam."
    },
    {
      question: "How can cloud solutions benefit my business?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam"
    },
    {
      question: "Can you assist with cloud migration and implementation?",
      answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate."
    },
    {
      question: "What type of support do you offer for your cloud solutions?",
      answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate"
    }
  ];

  return (
    <div className="w-full mx-auto p-6 bg-[#07282C]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#71D6CE] mb-4">
          Answers to Our Frequently Asked Questions
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Get answers to common queries regarding cloud support and maintenance.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mb-8">
        <h2 className="text-2xl text-[#71D6CE] font-bold  mb-6 text-center">
          Solutions and Services
        </h2>
      </div>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-[#ffffff0d] text-white  transition-colors duration-200 flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold text-white pr-4">
                {item.question}
              </h3>
              {openItems[index] ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            {openItems[index] && (
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cloud Security Section */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-[#71D6CE] mb-6 text-center">
          Cloud Security and Data Protection
        </h2>
      </div>

      {/* Cloud Security FAQ Items */}
      <div className="space-y-4 mb-12 ">
        <div className="border border-gray-200  rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('security-1')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d]   transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              How secure is the cloud for storing sensitive data?
            </h3>
            {openItems['security-1'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['security-1'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
              </p>
            </div>
          )}
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('security-2')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d]  transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              What measures do you take to ensure data backup and disaster recovery?
            </h3>
            {openItems['security-2'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['security-2'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
              </p>
            </div>
          )}
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('security-3')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d]  transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              How do you handle compliance and regulatory requirements?
            </h3>
            {openItems['security-3'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['security-3'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
              </p>
            </div>
          )}
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('security-4')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d] transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              Are there any compliance considerations when using cloud solutions?
            </h3>
            {openItems['security-4'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['security-4'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Cloud Support and Maintenance Section */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-[#71D6CE] mb-6 text-center">
          Cloud Support and Maintenance
        </h2>
      </div>

      {/* Cloud Support and Maintenance FAQ Items */}
      <div className="space-y-4 mb-12">
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('support-1')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d] transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              What kind of support do you provide for your cloud solutions?
            </h3>
            {openItems['support-1'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['support-1'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
              </p>
            </div>
          )}
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('support-2')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d] transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              How often do you update and maintain your cloud infrastructure?
            </h3>
            {openItems['support-2'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['support-2'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
              </p>
            </div>
          )}
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('support-3')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d] transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              How do you handle compliance and regulatory requirements?
            </h3>
            {openItems['support-3'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['support-3'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
              </p>
            </div>
          )}
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleItem('support-4')}
            className="w-full px-6 py-4 text-left bg-[#ffffff0d] transition-colors duration-200 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              Can you help with capacity planning and resource optimization?
            </h3>
            {openItems['support-4'] ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openItems['support-4'] && (
            <div className="px-6 py-4 bg-white border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <div className="bg-[#07282C] rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#71D6CE] mb-2">
            Still have questions?
          </h3>
          <p className="text-white mb-4">
            Can't find what you're looking for? We're here to help.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Morefaq;