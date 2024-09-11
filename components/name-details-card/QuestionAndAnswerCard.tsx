const QuestionAndAnswerCard = ({
  name,
  meaning,
  origin,
  gender,
  stories,
  short,
  pronunciation,
  religion,
  id,
}: any) => {
  const questionsAndAnswers = [
    {
      question: `What is the meaning of the name ${name}?`,
      answer: `The name ${name} means ${meaning}`,
    },
    {
      question: `What is the origin of the name ${name}?`,
      answer: `The name ${name} has its origins in ${origin}, 
      commonly used in ${religion} cultures. It reflects strong cultural and traditional values.`,
    },
    {
      question: `How do you pronounce the name ${name}?`,
      answer: `The pronunciation of ${name} is ${pronunciation}. It’s a simple and smooth-sounding name.`,
    },
    {
      question: `Is ${name} a boy's or girl's name?`,
      answer: `${name} is traditionally a ${gender}'s name. However, names can sometimes be unisex depending on cultural contexts.`,
    },
    {
      question: `How many letters in baby name ${name} have?`,
      answer: `${name} has ${name.length} letters`,
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
