import { Metadata } from "next";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact BabyNameNestlings | Connect with Baby Naming Experts",
  description:
    "Discover multiple ways to connect with BabyNameNestlings. Get support, share feedback, or explore our baby naming resources.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-[#f06246] text-3xl" />,
      title: "Email Support",
      description: "Reach out via email for personalized baby naming advice",
      contact: "babynamenestlings@gmail.com",
      type: "email",
    },
    {
      icon: <FaPhoneAlt className="text-[#006fee] text-3xl" />,
      title: "Phone Consultation",
      description: "Schedule a quick consultation about baby names",
      contact: "+880 1988039480",
      type: "phone",
    },
  ];

  const socialChannels = [
    {
      icon: <FaTwitter className="text-blue-400 text-3xl" />,
      name: "Twitter",
      handle: "@babynamenestlings",
      url: "https://x.com/namenestlings",
    },
    {
      icon: <FaFacebook className="text-blue-600 text-3xl" />,
      name: "Facebook",
      handle: "BabyNameNestlings",
      url: "https://facebook.com/babynamenestlings",
    },
    {
      icon: <FaLinkedin className="text-blue-700 text-3xl" />,
      name: "LinkedIn",
      handle: "BabyNameNestlings",
      url: "https://linkedin.com/company/babynamenestlings",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f8f9] to-[#e9ebee] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
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
            Connect with BabyNameNestlings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to help you find the perfect name for your little
            one. Choose your preferred method of communication.
          </p>
        </section>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 md:w-[65vw] mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="
                bg-white 
                shadow-2xl 
                rounded-2xl 
                p-8 
                transform 
                hover:scale-105 
                transition-transform 
                duration-300 
                flex 
                flex-col 
                items-center 
                text-center
              "
            >
              <div className="mb-6 p-4 bg-gray-100 rounded-full">
                {method.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {method.title}
              </h2>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <a
                href={
                  method.type === "email"
                    ? `mailto:${method.contact}`
                    : `tel:${method.contact}`
                }
                className="
                  bg-gradient-to-r 
                  from-[#f06246] 
                  to-[#006fee] 
                  text-white 
                  py-3 
                  px-6 
                  rounded-lg 
                  hover:opacity-90 
                  transition-opacity 
                  duration-300
                "
              >
                {method.contact}
              </a>
            </div>
          ))}
        </div>

        {/* Social Media Channels */}
        <section className="text-center">
          <h2
            className="
            text-3xl 
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
            Connect on Social Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Follow us for daily baby naming inspiration, tips, and updates.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            {socialChannels.map((channel, index) => (
              <Link
                key={index}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex 
                  flex-col 
                  items-center 
                  transform 
                  hover:scale-110 
                  transition-transform 
                  duration-300
                "
              >
                <div className="mb-4 p-4 bg-gray-100 rounded-full">
                  {channel.icon}
                </div>
                <span className="text-gray-700 font-semibold">
                  {channel.name}
                </span>
                <span className="text-gray-500 text-sm">{channel.handle}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="bg-white shadow-xl rounded-2xl p-8 mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2
                className="
        text-2xl 
        font-bold 
        text-gray-900 
        mb-6 
        pb-4 
        border-b 
        border-gray-200
      "
              >
                Our Communication Channels
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Email Consultation
                  </h3>
                  <p className="text-gray-600">
                    <strong>Primary Email:</strong>
                    <a
                      href="mailto:randzyx62@gmail.com"
                      className="ml-2 text-[#f06246] hover:underline"
                    >
                      babynamenestlings@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Typical response time: 24-48 hours
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="
        text-2xl 
        font-bold 
        text-gray-900 
        mb-6 
        pb-4 
        border-b 
        border-gray-200
      "
              >
                Our Global Presence
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Bangladesh Headquarters
                  </h3>
                  <p className="text-gray-600">
                    12/3, Kawla Bazar, Dhaka-1229, Bangladesh
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Business Hours: 9:00 AM - 6:00 PM (GMT+6)
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Singapore Regional Office
                  </h3>
                  <p className="text-gray-600">
                    314 Shunfu Rd, Singapore 570314
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Business Hours: 9:00 AM - 6:00 PM (GMT+8)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Text Section */}
        <section className="text-center mt-16 max-w-3xl mx-auto">
          <h2
            className="
    text-3xl 
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
            We&apos;re Here to Help
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At BabyNameNestlings, we understand that choosing a baby name is a
            deeply personal and meaningful journey. Our global team is committed
            to providing personalized support and guidance to help you find the
            perfect name for your little one. Whether you&apos;re seeking
            cultural insights, meaning exploration, or just some friendly
            advice, we&apos;re here to assist you every step of the way.
          </p>
        </section>

        {/* Mission and Values Section */}
        <section className="bg-gray-50 py-16 px-4 rounded-2xl shadow-lg mt-16">
          <div className="max-w-5xl mx-auto">
            <h2
              className="
      text-3xl 
      font-bold 
      text-gray-900 
      text-center 
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
              Our Mission and Commitment
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cultural Sensitivity",
                  description:
                    "We celebrate the rich diversity of naming traditions across cultures, providing respectful and insightful guidance.",
                  icon: "🌍",
                },
                {
                  title: "Personalized Support",
                  description:
                    "Every family's journey is unique. We offer tailored advice to help you find a name that resonates with your family's story.",
                  icon: "❤️",
                },
                {
                  title: "Comprehensive Research",
                  description:
                    "Our team conducts in-depth research to provide meaningful insights into name origins, meanings, and cultural significance.",
                  icon: "📚",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
            bg-white 
            p-6 
            rounded-xl 
            shadow-md 
            hover:shadow-xl 
            transition-shadow 
            duration-300 
            text-center
            transform 
            hover:-translate-y-2
          "
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                At BabyNameNestlings, we believe that a name is more than just a
                word. It's a powerful expression of identity, heritage, and
                hope. Our mission is to guide you through the meaningful journey
                of choosing a name that will accompany your child throughout
                their life.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
