import React, { useState } from 'react';
import './FAQs.css';
import waveYellow from '../../assets/wave-yellow.svg';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "How do I enter a competition?",
      answer: (
        <ol className="faq-answer-list">
          <li>Choose the prize you would like to win.</li>
          <li>Select a number or get a lucky dip.</li>
          <li>Checkout with your billing and card details.</li>
          <li>Receive a confirmation screen and email.</li>
          <li>Wait for the live draw!</li>
        </ol>
      )
    },
    {
      question: "Can I enter more than once?",
      answer: "Yes, you can enter as many times as you like for each competition. Each entry gives you a better chance of winning!"
    },
    {
      question: "How is the winner picked?",
      answer: "We use Google's Random Number Generator to ensure fair and transparent draws. All draws are conducted live on our social media channels."
    },
    {
      question: "How is the prize delivered?",
      answer: "Prizes are delivered directly to your registered address within 7-14 working days after the draw. We'll contact you to arrange delivery details."
    },
    {
      question: "Can I come to the live draw?",
      answer: "Unfortunately, live draws are conducted online only for security and fairness reasons. You can watch them live on our social media channels."
    },
    {
      question: "Which payment methods do you accept?",
      answer: "We accept all major credit and debit cards including Visa, Mastercard, and American Express. All payments are processed securely."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="faqs-page">
      <section className="faqs-hero">
        <div className="faqs-background"></div>
        <h1 className="faqs-title">FAQS</h1>
        <div className="faqs-wave">
          <img src={waveYellow} alt="Wave" className="faqs-wave-image" />
        </div>
      </section>

      <div className="faqs-content">
        <div className="faqs-container">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-chevron">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Extra four boxes removed as requested */}
      </div>
    </div>
  );
};

export default FAQs;


