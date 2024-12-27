import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/utils/getData";
import { countries } from "@/data/countryMetadata";
import { religions } from "@/data/religionMetadata";
import ShareWidget from "@/components/share/ShareWidget";
import { encodeNameIndex } from "@/utils/converters";

const HomePage = async () => {
  const currentYear = new Date().getFullYear();

  const top100BoyNames = await getData("usaTop100BoyName");
  const top100GirlNames = await getData("usaTop100GirlName");

  const genderSection = (
    <div className="my-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#f06246]">
        Find Names By Gender
      </h2>
      <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
        Browse our comprehensive selection of baby names categorized by gender.
        Whether you&apos;re looking for baby names for boys or girls,
        you&apos;ll find a wide range of options that cater to your preferences
        and style.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 my-[20px] cursor-pointer">
        <Link href={`/usa/boy`}>
          <div className="h-[180px] w-[300px]  rounded-xl flex flex-col  items-center justify-center bg-[#006fee] hover:bg-[#88b3e3]  text-white hover:text-black">
            <Image
              alt="boyes name"
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-boy-icon.svg"}
            />
            <p className="text-xl text-center ">Baby name (boy)</p>
            <p className="text-sm text-center mt-2">
              Explore a variety of beautiful baby names perfect for your little
              girl.
            </p>
          </div>
        </Link>
        <Link href={`/usa/girl`}>
          <div className="h-[180px] w-[300px]  rounded-xl flex flex-col items-center justify-center bg-[#f06246] hover:bg-[#f3917d] text-white hover:text-black">
            <Image
              alt="girls name"
              height={20}
              width={20}
              className="w-20 h-20"
              src={"/young-girl-icon.svg"}
            />
            <p className="text-xl text-center ">Baby name (girl)</p>
            <p className="text-sm text-center mt-2">
              Explore a variety of beautiful baby names perfect for your little
              girl.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );

  const religionSection = (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#f06246]">
        Find Name by Religion
      </h2>
      <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
        Find meaningful baby names inspired by religious beliefs and traditions.
        Our curated list includes baby names from diverse religious backgrounds,
        offering a deep connection to faith and spirituality.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-[40px] cursor-pointer">
        {religions.map((r, index) => {
          const mobileBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          const mediumBgClass =
            index === 0 || index === 3
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          return (
            <Link href={`/${r.path.toLowerCase()}`} key={index}>
              <div
                className={`h-[250px] w-[300px] rounded-xl flex flex-col items-center justify-center text-white hover:text-black ${mediumBgClass}`}
              >
                <Image
                  alt={`${r.desc} Name`}
                  height={20}
                  width={20}
                  className="w-20 h-20"
                  src={r.image}
                />
                <p className="text-2xl text-center font-semibold">
                  {r.desc} baby name
                </p>
                <p className="text-sm text-center mt-2">
                  {r.shortDescription.substr(0, 60)}...
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  const countrySection = (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#f06246]">
        Baby Name by Country
      </h2>
      <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
        Explore our extensive collection of baby names from various countries
        around the world. Discover unique and popular baby names that reflect
        the cultural heritage and traditions of different nations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-[40px] cursor-pointer">
        {countries.map((c, index) => {
          const mediumBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          return (
            <Link href={`/${c.name.toLowerCase()}`} key={index}>
              <div
                className={`h-[250px] w-[300px] rounded-xl flex flex-col items-center justify-center text-white hover:text-black ${mediumBgClass}`}
              >
                <Image
                  alt={`${c.desc} Name`}
                  height={20}
                  width={20}
                  className="w-auto h-20"
                  src={`https://flagcdn.com/${c.code}.svg`}
                />
                <p className="text-xl text-center font-semibold">
                  {c.desc} baby name
                </p>
                <p className="text-sm text-center mt-2">
                  {c.metaDescription?.substring(0, 80)}...
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  const faqData = [
    {
      question: "How do I choose the perfect baby name?",
      answer:
        "Consider factors like cultural significance, family traditions, name meaning, sound, and personal connection. Think about how the name might grow with your child and potential nicknames.",
    },
    {
      question: "Do names really impact a child's life?",
      answer:
        "Research suggests names can influence perceptions and self-image. A meaningful name can provide a sense of identity and cultural connection.",
    },
    {
      question: "How many names should I consider before deciding?",
      answer:
        "We recommend creating a shortlist of 5-10 names. Discuss with your partner, say them out loud, and see how they feel over time.",
    },
    {
      question: "Are unique names better than traditional names?",
      answer:
        "There's no universal 'better' - it depends on your personal preference. Unique names can be memorable, while traditional names offer a sense of familiarity and connection.",
    },
    {
      question: "How can I ensure my baby's name is meaningful?",
      answer:
        "Research the name's origin, meaning, and cultural significance. Consider names that reflect your family's heritage, values, or aspirations for your child.",
    },
    {
      question: "What should I avoid when naming my baby?",
      answer:
        "Avoid names that could lead to potential teasing, difficult pronunciations, or unfortunate initials. Consider how the name sounds with your last name and potential nicknames.",
    },
    {
      question: "How do cultural backgrounds influence baby naming?",
      answer:
        "Different cultures have unique naming traditions. Some follow family naming patterns, others have religious significance, and some prioritize meanings or family honors.",
    },
    {
      question: "Can I change my baby's name later?",
      answer:
        "While possible, changing a name legally can be complex. Most name changes require a legal process and can be costly. It's best to choose carefully from the start.",
    },
    {
      question: "How do I handle family pressure about naming?",
      answer:
        "Communicate openly with family. Explain your reasoning, listen to their suggestions, but remember the final decision is yours. Balance respect for traditions with your personal preferences.",
    },
    {
      question: "What are the trends in baby naming?",
      answer:
        "Current trends include nature-inspired names, gender-neutral names, vintage revivals, and names with cultural significance. However, choose a name that resonates with you, not just trends.",
    },
  ];

  const FAQSection = (
    <section className="py-16 px-4 md:px-0" aria-labelledby="faq-section-title">
      <div className="max-w-5xl mx-auto">
        <h2
          id="faq-section-title"
          className="text-3xl font-bold text-center mb-12 text-gray-900 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#f06246]"
        >
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 text-3xl font-bold text-[#f06246] opacity-50">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-[#f06246] text-white px-6 py-3 rounded-full hover:bg-[#d84e2f] transition-colors duration-300 inline-block shadow-md hover:shadow-lg"
          >
            Contact Us For More Help
          </Link>
        </div>
      </div>
    </section>
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px] text-black">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-40 after:h-1 after:bg-[#f06246]">
          Discover Beautiful Baby Names You&apos;ll Cherish
        </h1>
        <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
          Welcome to BabyNameNestlings, your ultimate destination for finding
          the perfect baby name. Explore our extensive collection of unique and
          meaningful baby names, carefully curated to help you choose a name
          that your family will treasure forever.
        </p>
        <ShareWidget />
        <div className="p-5 mb-5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/baby.webp"
              alt="Smiling babies"
              height={300}
              width={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <div className="flex flex-col items-center justify-center mb-5">
                <h2 className="text-xl font-bold text-center mt-5 break-words">
                  Top Girl Names in the USA for {currentYear}: Most Popular
                  Choice
                </h2>
              </div>
              {top100GirlNames.nameList
                .slice(0, 30)
                .map((nameObj: any, index: any) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography
                          sx={{ width: "45%", flexShrink: 0 }}
                          className="flex items-center"
                        >
                          <Image
                            alt="girls name"
                            height={20}
                            width={20}
                            className="mr-2 w-5 h-5 filter-orange"
                            src={"/young-girl-icon.svg"}
                          />
                          {nameObj.name}
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          {nameObj.meaning}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className="list-disc py-5 px-10">
                          {nameObj.stories.map((story: any, idx: any) => {
                            return (
                              <li key={idx} className="mb-2">
                                <p className="text-gray-800 text-md">{story}</p>
                              </li>
                            );
                          })}
                          {nameObj.isDetailsPresent ? (
                            <Link
                              href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, null, "girl", 1, index)}`}
                              target="_blank"
                              className="font-semibold underline"
                            >
                              View More
                            </Link>
                          ) : null}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}

              <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
                <Link
                  href={`/usa/girl`}
                  className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
                >
                  See More
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col items-center justify-center mb-5">
                <h2 className="text-xl font-bold text-center mt-5 ">
                  Top Boy Names in the USA for {currentYear}: Most Popular
                  Choice
                </h2>
              </div>
              {top100BoyNames.nameList
                .slice(0, 30)
                .map((nameObj: any, index: any) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography
                          sx={{ width: "45%", flexShrink: 0 }}
                          className="flex items-center"
                        >
                          <Image
                            alt="boys name"
                            height={20}
                            width={20}
                            className="mr-2 w-5 h-5 filter-blue"
                            src={"/young-boy-icon.svg"}
                          />
                          {nameObj.name}
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          {nameObj.meaning}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className="list-disc py-5 px-10 ">
                          {nameObj.stories.map((story: any, idx: any) => {
                            return (
                              <li key={idx} className="mb-2">
                                <p className="text-gray-800 text-md">{story}</p>
                              </li>
                            );
                          })}
                          {nameObj.isDetailsPresent ? (
                            <Link
                              href={`/meaning-of-name-${nameObj.name.toLowerCase()}-${encodeNameIndex(null, null, "boy", 1, index)}`}
                              target="_blank"
                              className="font-semibold underline"
                            >
                              View More
                            </Link>
                          ) : null}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}

              <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
                <Link
                  href={`/usa/boy`}
                  className="bg-[#f06246] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>{genderSection}</div>

        <div>{religionSection}</div>

        <div className="mt-10">{countrySection}</div>

        {FAQSection}

        <p className="text-center px-4 py-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-800">
          Choosing the perfect baby name is a cherished and significant decision
          for every parent. A beautiful baby name not only carries cultural,
          familial, and personal significance, but it also shapes the identity
          and future of your child. At BabyNameNestlings, we understand the
          importance of finding a baby name that resonates with love, meaning,
          and uniqueness. Our extensive database of baby names offers a variety
          of options to reflect your values and preferences. Whether you are
          seeking traditional baby names, modern baby names, or names with a
          specific cultural heritage, we provide a comprehensive selection to
          help you find the ideal name for your little one. Explore our
          collection and discover the perfect baby name that your family will
          cherish for generations.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
