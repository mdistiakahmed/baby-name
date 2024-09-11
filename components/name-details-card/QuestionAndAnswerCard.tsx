const QuestionAndAnswerCard = () => {
  const questionsAndAnswers = [
    {
      question: "What is the meaning of the name Istiak?",
      answer: `The name Istiak means "desire" or "longing."`,
    },
    {
      question: "What is the origin of the name Istiak?",
      answer: `The name Istiak has its origins in Arabic, 
      commonly used in Muslim cultures. It reflects strong cultural and traditional values.`,
    },
    {
      question: "How do you pronounce the name Istiak?",
      answer: `The pronunciation of Istiak is "Is-tee-ack." It’s a simple and smooth-sounding name.`,
    },
    {
      question: "Is Istiak a boy's or girl's name?",
      answer:
        "Istiak is traditionally a boy's name. However, names can sometimes be unisex depending on cultural contexts.",
    },
  ];

  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg ">
      {questionsAndAnswers.map((item, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <button className="w-full text-left flex justify-between items-center font-medium text-lg text-gray-800 py-2 focus:outline-none">
            <span>{item.question}</span>
            <svg
              className={`w-6 h-6 transition-transform transform `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <p className="mt-2 text-gray-600 transition-opacity duration-500">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuestionAndAnswerCard;
