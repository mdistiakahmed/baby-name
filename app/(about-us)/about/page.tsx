import { Metadata } from "next";
import { FaFlag, FaUsers, FaGlobe, FaHeart } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About BabyNameNestlings | Our Story and Mission",
  description:
    "Discover the passion behind BabyNameNestlings. Learn about our commitment to helping families find meaningful baby names across cultures and traditions.",
};

export default function AboutPage() {
  const teamValues = [
    {
      icon: <FaFlag className="text-[#f06246] text-4xl" />,
      title: "Our Mission",
      description:
        "To provide families with meaningful, culturally rich baby naming guidance that celebrates diversity and personal identity.",
    },
    {
      icon: <FaUsers className="text-[#006fee] text-4xl" />,
      title: "Our Approach",
      description:
        "We combine deep cultural research, linguistic expertise, and personalized support to help you find the perfect name.",
    },
    {
      icon: <FaGlobe className="text-[#4CAF50] text-4xl" />,
      title: "Global Perspective",
      description:
        "With roots in Bangladesh and Singapore, we offer a truly international approach to baby naming.",
    },
    {
      icon: <FaHeart className="text-[#FF5722] text-4xl" />,
      title: "Our Commitment",
      description:
        "We believe every name tells a story. Our passion is helping you write the first chapter of your child's unique narrative.",
    },
  ];

  return (
    <div className="min-h-screen  py-16 px-4 flex justify-center">
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
            About BabyNameNestlings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging cultures, celebrating identities, and helping families find
            the perfect name that resonates with their unique story.
          </p>
        </section>

        {/* Expanded Story Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            The Birth of a Naming Revolution
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In 2023, BabyNameNestlings was conceived from a profound
                understanding that names are more than mere labels. They are
                powerful narratives that connect generations, cultures, and
                personal identities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our founders, a diverse team of linguists, cultural experts, and
                passionate parents, recognized the transformative power of
                choosing the right name. We embarked on a mission to create a
                platform that goes beyond simple name listings.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe that every name carries a unique story – a blend of
                cultural heritage, family traditions, and personal aspirations.
                Our comprehensive approach ensures that families find names that
                are not just beautiful, but meaningful.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From deep linguistic research to cultural insights, we provide a
                holistic naming experience that celebrates the diversity of
                human expression.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
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
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Approach Section */}
<section className="bg-gradient-to-br from-[#f9f5f0] to-[#f1f5f9] py-16 rounded-2xl shadow-xl mb-16">
  <div className="container mx-auto px-4">
    <h2 className="
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
    ">
      Our Unique Naming Approach
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Cultural Depth",
          description: "We dive deep into the rich tapestry of global naming traditions, offering insights that go beyond surface-level meanings.",
          benefits: [
            "Comprehensive cultural research",
            "Authentic name origins",
            "Meaningful context"
          ],
          icon: "🌐"
        },
        {
          title: "Personalized Guidance",
          description: "Our expert team provides tailored advice, understanding that each family's naming journey is unique.",
          benefits: [
            "One-on-one consultations",
            "Customized name recommendations",
            "Supportive naming experience"
          ],
          icon: "❤️"
        },
        {
          title: "Linguistic Expertise",
          description: "Leveraging linguistic research to explore the phonetic and semantic nuances of names across languages.",
          benefits: [
            "Pronunciation guides",
            "Multilingual name analysis",
            "Semantic meaning exploration"
          ],
          icon: "📚"
        }
      ].map((approach, index) => (
        <div 
          key={index} 
          className="
            bg-white 
            p-6 
            rounded-2xl 
            shadow-md 
            transform 
            transition-all 
            duration-300 
            hover:-translate-y-2 
            hover:shadow-xl
          "
        >
          <div className="text-5xl text-center mb-4">{approach.icon}</div>
          <h3 className="
            text-xl 
            font-semibold 
            text-gray-800 
            text-center 
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
          ">
            {approach.title}
          </h3>
          <p className="text-gray-600 text-center mb-6">
            {approach.description}
          </p>
          <ul className="space-y-2 text-gray-700">
            {approach.benefits.map((benefit, benefitIndex) => (
              <li 
                key={benefitIndex} 
                className="
                  flex 
                  items-center 
                  before:content-['✓'] 
                  before:text-[#f06246] 
                  before:mr-2
                "
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center max-w-3xl mx-auto">
      <p className="text-lg text-gray-700 leading-relaxed">
        At BabyNameNestlings, we don&apos;t just provide names – we offer a 
        comprehensive journey of discovery, helping you find a name that 
        resonates with your family&apos;s unique story and cultural heritage.
      </p>
    </div>
  </div>
</section>

        {/* Closing Section */}
        <section className="text-center bg-gradient-to-r from-[#f06246] to-[#006fee] text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Join Our Naming Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you&apos;re expecting a little one or helping a friend find
            the perfect name, BabyNameNestlings is here to support you every
            step of the way.
          </p>
          <div className="text-xs text-white/70 mt-8">
            This site may use cookies and display personalized ads. By exploring
            our content, you agree to our privacy policy.
          </div>
        </section>
      </div>
    </div>
  );
}
