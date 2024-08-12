import React, { useState } from 'react'

export default function Answar() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="AnswarParent">
      <div className="containerAnswars">
        <div style={{ textAlign: 'center' }}>FAQS</div>
        <div className="fingertips">Answar At Your Fingertips</div>
      </div>
      <div className="Q_A">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="titleAnswar" onClick={() => handleClick(index)}>
            {item.question}
            <span style={{ fontSize: '20px' }}>{openIndex === index ? '-' : '+'}</span>
            {openIndex === index && <div className="p">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

const questionsAndAnswers = [
  {
    question: 'What types of IT services and solutions do you offer?',
    answer: 'We offer a range of IT services including development, consulting, and support.',
  },
  {
    question: 'What is your response time for support requests?',
    answer: 'Our average response time is within 24 hours.',
  },
  {
    question: 'What types of IT services and solutions do you offer?',
    answer: 'We offer a range of IT services including development, consulting, and support.',
  },
  {
    question: 'What is your response time for support requests?',
    answer: 'Our average response time is within 24 hours.',
  },
  // Add more questions and answers here
]
