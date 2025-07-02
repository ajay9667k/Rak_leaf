import React, { useState } from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "What is a software-defined network?",
      answer: "A software-defined network (SDN) is a network architecture that enables centralized control of network resources, allowing more flexible, efficient, and automated management."
    },
    {
      question: "How secure is your network platform?",
      answer: "Our platform uses end-to-end encryption, regular security audits, and real-time threat monitoring to ensure the highest level of security for your data."
    },
    {
      question: "Can I scale my network as my business grows?",
      answer: "Absolutely! Our platform is built to scale easily, allowing you to add more resources and bandwidth as your needs evolve."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, our expert support team is available around the clock to assist you with any network issues or questions."
    },
    {
      question: "Is real-time monitoring available?",
      answer: "Yes, we offer real-time monitoring and instant alerts, helping you maintain optimal network performance at all times."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#07282C]  text-white">
      <div className="max-w-4xl mx-auto mt-[150px] md:mt-0 px-4">
        <h2 className="text-4xl font-extrabold text-[#71D6CE] text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#ffffff0d] shadow-md rounded-xl p-6">
              <button
                className="w-full text-left flex justify-between items-center text-xl font-semibold"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
