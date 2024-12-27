import CountryLetterComponent from "@/components/country/CountryLetterComponent";
import ReligionLetterComponent from "@/components/religion/ReligionLetterComponent";
import { supportedCountries, supportedReligions } from "@/utils/constants";
import { Metadata } from "next";


export function generateStaticParams() {
  const religions = supportedReligions;
  const countries = supportedCountries;
  const genders = ['boy', 'girl'];
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const params: Array<{id: string, gender: string, letter: string}> = [];

  // Generate routes for religions
  religions.forEach(religion => {
    genders.forEach(gender => {
      letters.forEach(letter => {
        params.push({
          id: religion,
          gender: gender,
          letter: letter
        });
      });
    });
  });

  // Generate routes for countries
  countries.forEach(country => {
    genders.forEach(gender => {
      letters.forEach(letter => {
        params.push({
          id: country,
          gender: gender,
          letter: letter
        });
      });
    });
  });

  return params;
}

export async function generateMetadata({
    params,
  }: any): Promise<Metadata | undefined> {
    const { id, gender, letter } = params;
  
    // Case 1: Religion, Gender, and Letter-based Names
    if (supportedReligions.includes(id.toLowerCase())) {
      const religionName = id === "islam" ? "Muslim" : id.charAt(0).toUpperCase() + id.slice(1);
      const genderText = gender.charAt(0).toUpperCase() + gender.slice(1);
      const letterText = letter.toUpperCase();
      
      return {
        title: `${religionName} ${genderText} Names Starting with ${letterText} | Meaningful Names`,
        description: `Discover a curated collection of beautiful ${genderText.toLowerCase()} baby names from ${religionName} religious traditions that start with the letter ${letterText}. Explore meaningful names reflecting cultural heritage, spiritual significance, and ${genderText.toLowerCase()} identity.`,
        keywords: [
          `${religionName} ${genderText} names starting with ${letterText}`,
          `${religionName} baby names`,
          `${genderText.toLowerCase()} names beginning with ${letterText}`,
          `cultural ${religionName} names`,
          `traditional ${religionName} ${genderText.toLowerCase()} names`
        ],
        openGraph: {
          title: `${religionName} ${genderText} Names | ${letterText} Letter Names`,
          description: `Explore meaningful ${genderText.toLowerCase()} baby names from ${religionName} religious traditions starting with ${letterText}.`,
          type: "website",
          locale: "en_US",
          siteName: "Baby Name Nestlings",
          images: [
            {
              url: "baby.webp",
              width: 1200,
              height: 630,
              alt: "Diverse babies representing global naming traditions",
            },
          ],
        }
      };
    }
  
    // Case 2: Country, Gender, and Letter-based Names
    if (supportedCountries.includes(id.toLowerCase())) {
      const countryName = id === 'usa' ? 'United States' : 'Tamil';
      const genderText = gender.charAt(0).toUpperCase() + gender.slice(1);
      const letterText = letter.toUpperCase();
      
      return {
        title: `${countryName} ${genderText} Names Starting with ${letterText} | Unique Names`,
        description: `Explore a diverse collection of ${genderText.toLowerCase()} baby names from ${countryName} that start with the letter ${letterText}. Find unique, culturally rich names that celebrate the heritage and traditions of ${countryName} for ${genderText.toLowerCase()} babies.`,
        keywords: [
          `${id} ${genderText.toLowerCase()} names starting with ${letterText}`,
          `${countryName} ${genderText.toLowerCase()} baby names`,
          `${genderText.toLowerCase()} names beginning with ${letterText}`,
          'traditional names',
          'international baby names'
        ],
        openGraph: {
          title: `${countryName} ${genderText} Names | ${letterText} Letter Names`,
          description: `Discover unique ${genderText.toLowerCase()} baby names from ${countryName}'s rich cultural landscape starting with ${letterText}.`,
          type: "website",
          locale: "en_US",
          siteName: "Baby Name Nestlings",
          images: [
            {
              url: "baby.webp",
              width: 1200,
              height: 630,
              alt: "Diverse babies representing global naming traditions",
            },
          ],
        }
      };
    }
  
    // Default metadata if no specific case matches
    return {
      title: "Baby Name Nestlings | Discover Meaningful Names",
      description: "Explore a world of beautiful, meaningful baby names across cultures, genders, and countries.",
      keywords: [
        'baby names',
        'name meanings',
        'cultural names',
        'international baby names',
        'gender-specific names',
        'alphabetical baby names'
      ]
    };
  }

const LetterWiseNames = ({ params, searchParams }: any) => {
  const { id, gender, letter } = params;
  const currentPage = searchParams["page"] ? String(searchParams["page"]) : "1";

  if (supportedReligions.includes(id.toLowerCase())) {
    return (
      <ReligionLetterComponent
        religionName={id.toLowerCase()}
        gender={gender}
        letter={letter}
        pageNumber={currentPage}
      />
    );
  }

  if (supportedCountries.includes(id.toLowerCase())) {
    return (
      <CountryLetterComponent
        countryName={id.toLowerCase()}
        gender={gender}
        letter={letter}
        pageNumber={currentPage}
      />
    );
  }

  return <div>page</div>;
};

export default LetterWiseNames;
