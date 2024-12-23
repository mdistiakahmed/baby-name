import { Metadata } from "next";
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaClipboardCheck,
} from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Privacy Policy | BabyNameNestlings - Protecting Your Personal Information",
  description:
    "Comprehensive privacy policy for BabyNameNestlings. Learn how we collect, use, and protect your personal data while providing baby naming services.",
};

export default function PrivacyPage() {
  const privacyHighlights = [
    {
      icon: <FaShieldAlt className="text-[#f06246] text-4xl" />,
      title: "Data Protection",
      description:
        "We implement robust security measures to protect your personal information from unauthorized access.",
    },
    {
      icon: <FaLock className="text-[#006fee] text-4xl" />,
      title: "Transparent Practices",
      description:
        "Our privacy policy is clear, concise, and provides complete transparency about data usage.",
    },
    {
      icon: <FaUserSecret className="text-[#4CAF50] text-4xl" />,
      title: "User Control",
      description:
        "You have full control over your personal data, with options to review, update, and delete information.",
    },
    {
      icon: <FaClipboardCheck className="text-[#FF5722] text-4xl" />,
      title: "Compliance",
      description:
        "We adhere to international data protection regulations and best practices.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 flex justify-center">
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trust is our priority. We are committed to protecting your
            personal information and maintaining the highest standards of data
            privacy.
          </p>
        </section>

        {/* Privacy Highlights */}
        <section className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h2
            className="
            text-3xl 
            font-bold 
            text-center 
            text-gray-900 
            mb-12 
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
            Our Privacy Commitment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyHighlights.map((highlight, index) => (
              <div
                key={index}
                className="
                  bg-gray-50 
                  p-6 
                  rounded-xl 
                  text-center 
                  transform 
                  hover:-translate-y-2 
                  transition-transform 
                  duration-300 
                  hover:shadow-xl
                "
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Privacy Information */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Detailed Privacy Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Information We Collect
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Personal contact information</li>
                <li>• Usage data and interactions</li>
                <li>• Device and browser information</li>
                <li>• Anonymized analytics data</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                How We Use Your Data
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Improve user experience</li>
                <li>• Personalize content</li>
                <li>• Communicate updates</li>
                <li>• Comply with legal requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Rights and User Control Section */}
        <section className="bg-gray-50 rounded-2xl shadow-xl p-12 mb-16">
          <h2
            className="
    text-3xl 
    font-bold 
    text-center 
    text-gray-900 
    mb-12 
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
            Your Data, Your Control
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Access Your Data",
                description:
                  "Request a copy of all personal information we hold about you.",
                icon: "🔍",
                details: [
                  "Comprehensive data report",
                  "Easy-to-understand format",
                  "Prompt response within 30 days",
                ],
              },
              {
                title: "Data Correction",
                description:
                  "Ensure your personal information is accurate and up-to-date.",
                icon: "✏️",
                details: [
                  "Update personal details",
                  "Correct any inaccuracies",
                  "Maintain data integrity",
                ],
              },
              {
                title: "Right to be Forgotten",
                description: "Request complete deletion of your personal data.",
                icon: "🗑️",
                details: [
                  "Complete data removal",
                  "Permanent account deletion",
                  "Irreversible process",
                ],
              },
            ].map((right, index) => (
              <div
                key={index}
                className="
          bg-white 
          p-6 
          rounded-2xl 
          shadow-md 
          transform 
          hover:-translate-y-2 
          transition-all 
          duration-300 
          hover:shadow-xl
        "
              >
                <div className="text-5xl text-center mb-4">{right.icon}</div>
                <h3
                  className="
          text-xl 
          font-semibold 
          text-center 
          text-gray-800 
          mb-4
          relative
          after:content-[''] 
          after:absolute 
          after:-bottom-2 
          after:left-1/2 
          after:-translate-x-1/2 
          after:w-20 
          after:h-1 
          after:bg-[#f06246]
        "
                >
                  {right.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {right.description}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {right.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="
                flex 
                items-center 
                before:content-['✓'] 
                before:text-[#f06246] 
                before:mr-2
              "
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* International Compliance Section */}
        <section className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h2
            className="
    text-3xl 
    font-bold 
    text-center 
    text-gray-900 
    mb-12 
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
            Global Privacy Compliance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Regulatory Adherence
              </h3>
              <p className="text-gray-600 mb-4">
                We are committed to complying with international data protection
                regulations, ensuring your privacy is protected across borders.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-[#f06246] mr-2">•</span> GDPR (European
                  Union)
                </li>
                <li className="flex items-center">
                  <span className="text-[#f06246] mr-2">•</span> CCPA
                  (California)
                </li>
                <li className="flex items-center">
                  <span className="text-[#f06246] mr-2">•</span> PDPA
                  (Singapore)
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Protection Principles
              </h3>
              <p className="text-gray-600 mb-4">
                Our data handling follows strict principles of transparency,
                security, and user empowerment.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-[#f06246] mr-2">•</span> Lawful and Fair
                  Processing
                </li>
                <li className="flex items-center">
                  <span className="text-[#f06246] mr-2">•</span> Purpose
                  Limitation
                </li>
                <li className="flex items-center">
                  <span className="text-[#f06246] mr-2">•</span> Data
                  Minimization
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AdSense and Cookies Disclaimer */}
        <section className="bg-gradient-to-r from-[#f06246] to-[#006fee] text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Cookies and Personalized Ads
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            This site uses cookies and may display personalized advertisements.
            By continuing to use our service, you consent to our use of cookies
            and agree to our privacy practices.
          </p>
          <div className="text-sm text-white/70">
            Last Updated: December 2023
          </div>
        </section>
      </div>
    </div>
  );
}
