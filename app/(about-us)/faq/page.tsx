import { Metadata } from "next";
import Link from "next/link";
import {
  FaQuestionCircle,
  FaSearch,
  FaRegLightbulb,
  FaClipboardList,
} from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Frequently Asked Questions | BabyNameNestlings - Expert Baby Naming Insights",
  description:
    "Comprehensive FAQ for baby naming. Get answers to common questions about choosing the perfect name, cultural considerations, and our naming services.",
};

export default function FAQPage() {
  const faqSections = [
    {
      title: "Naming Basics",
      questions: [
        {
          question: "How do I choose the perfect baby name?",
          answer:
            "Choosing a name involves considering cultural significance, family traditions, meaning, and personal preference. We recommend exploring name origins, listening to how the name sounds, and ensuring it has a positive meaning.",
        },
        {
          question: "What factors should I consider when selecting a name?",
          answer:
            "Consider the name's meaning, cultural background, potential nicknames, initials, and how it sounds with your last name. Also, think about future implications and how the name might impact your child's life.",
        },
      ],
    },
    {
      title: "Cultural Considerations",
      questions: [
        {
          question: "How important is cultural significance in naming?",
          answer:
            "Cultural significance is crucial. A name can connect your child to their heritage, carry family traditions, and provide a sense of identity. We help you explore names that honor your cultural background while resonating with modern sensibilities.",
        },
        {
          question: "Do you support naming traditions from different cultures?",
          answer:
            "Absolutely! We celebrate diversity and provide in-depth insights into naming traditions from various cultures, helping you find a name that is both meaningful and respectful.",
        },
      ],
    },
    {
      title: "Our Services",
      questions: [
        {
          question: "What naming services do you offer?",
          answer:
            "We provide comprehensive naming consultations, cultural name research, personalized name recommendations, and in-depth name meaning explorations. Our services are tailored to help you find the perfect name for your child.",
        },
        {
          question: "How can I get personalized naming advice?",
          answer:
            "Contact our expert team through email or our consultation form. We'll discuss your preferences, cultural background, and specific requirements to provide tailored name recommendations.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f8f9] to-[#e9ebee] py-16 px-4 flex justify-center">
      <div className="w-[95vw] md:w-[70vw] container mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1
            className="
            text-4xl 
            font-bold 
            text-gray-900 
            mb-6 
            relative 
            after:content-[''] 
            after:absolute 
            after:-bottom-4 
            after:left-1/2 
            after:-translate-x-1/2 
            after:w-40 
            after:h-1 
            after:bg-[#f06246]
          "
          >
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive guide to baby naming. Find answers to common
            questions and discover insights from our naming experts.
          </p>
        </section>

        {/* FAQ Sections */}
        {faqSections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <h2
              className="
              text-2xl 
              font-bold 
              text-gray-800 
              mb-6 
              pb-4 
              border-b 
              border-gray-200
            "
            >
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.questions.map((faq, faqIndex) => (
                <div
                  key={faqIndex}
                  className="
                    bg-gray-50 
                    p-6 
                    rounded-xl 
                    transform 
                    transition-all 
                    duration-300 
                    hover:shadow-md
                  "
                >
                  <h3
                    className="
                    text-xl 
                    font-semibold 
                    text-gray-800 
                    mb-4 
                    flex 
                    items-center
                  "
                  >
                    <FaQuestionCircle className="mr-3 text-[#f06246]" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Additional Resources Section */}
        <section className="bg-gradient-to-r from-[#f06246] to-[#006fee] text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Guidance?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our naming experts are ready to help you find the perfect name.
            Reach out for personalized consultation and expert advice.
          </p>
          <Link
            href="/contact"
            className="
      inline-block 
      bg-white 
      text-[#f06246] 
      font-semibold 
      py-3 
      px-8 
      rounded-full 
      hover:bg-opacity-90 
      transition-all 
      duration-300 
      shadow-lg 
      hover:shadow-xl 
      transform 
      hover:-translate-y-1
    "
          >
            Contact Our Naming Experts
          </Link>
          <div className="text-xs text-white/70 mt-8">
            This site may use cookies and display personalized ads. By exploring
            our content, you agree to our privacy policy.
          </div>
        </section>
      </div>
    </div>
  );
}
