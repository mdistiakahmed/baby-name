import CountryGenderComponent from "@/components/country/CountryGenderComponent";
import ReligionGenderComponent from "@/components/religion/ReligionGenderComponent";
import { supportedCountries, supportedReligions } from "@/utils/constants";
import { Metadata } from "next";
import React from "react";


export function generateStaticParams() {
  const religions = supportedReligions;
  const countries = supportedCountries;
  const genders = ['boy', 'girl'];

  const params: Array<{id: string, gender: string}> = [];

  // Generate routes for religions
  religions.forEach(religion => {
    genders.forEach(gender => {
      params.push({
        id: religion,
        gender: gender
      });
    });
  });

  // Generate routes for countries
  countries.forEach(country => {
    genders.forEach(gender => {
      params.push({
        id: country,
        gender: gender
      });
    });
  });

  return params;
}

export async function generateMetadata({
    params,
  }: any): Promise<Metadata | undefined> {
    const { id, gender } = params;
  
    // Case 1: Religion and Gender-based Names
    if (supportedReligions.includes(id.toLowerCase())) {
      const religionName = id === "islam" ? "Muslim" : id.charAt(0).toUpperCase() + id.slice(1);
      const genderText = gender.charAt(0).toUpperCase() + gender.slice(1);
      
      return {
        title: `${religionName} ${genderText} Names | Meaningful ${genderText} Names from ${religionName} Culture`,
        description: `Discover a curated collection of beautiful ${genderText} baby names from ${religionName} religious traditions. Find meaningful names that reflect cultural heritage, spiritual significance, and ${genderText.toLowerCase()} identity.`,
        keywords: [
          `${religionName} ${genderText} names`,
          `${religionName} baby names`,
          `${genderText.toLowerCase()} name meanings`,
          `cultural ${religionName} names`,
          `traditional ${religionName} ${genderText.toLowerCase()} names`
        ],
        openGraph: {
          title: `${religionName} ${genderText} Names | Cultural Naming Guide`,
          description: `Explore meaningful ${genderText.toLowerCase()} baby names from ${religionName} religious traditions.`,
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
  
    // Case 2: Country and Gender-based Names
    if (supportedCountries.includes(id.toLowerCase())) {
      const countryName = id === 'usa' ? 'United States' : 'Tamil';
      const genderText = gender.charAt(0).toUpperCase() + gender.slice(1);
      
      return {
        title: `${countryName} ${genderText} Names | Unique ${genderText} Names from ${countryName}`,
        description: `Explore a diverse collection of ${genderText.toLowerCase()} baby names from ${countryName}. Find unique, culturally rich names that celebrate the heritage and traditions of ${countryName} for ${genderText.toLowerCase()} babies.`,
        keywords: [
          `${id} ${genderText.toLowerCase()} names`,
          `${countryName} ${genderText.toLowerCase()} baby names`,
          `${genderText.toLowerCase()} cultural names`,
          'traditional names',
          'international baby names'
        ],
        openGraph: {
          title: `${countryName} ${genderText} Names | Cultural Naming Guide`,
          description: `Discover unique ${genderText.toLowerCase()} baby names from ${countryName}'s rich cultural landscape.`,
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
        'gender-specific names'
      ]
    };
  }

const GenderWiseNames = ({ params, searchParams }: any) => {
  const { id, gender } = params;
  const currentPage = searchParams["page"] ? String(searchParams["page"]) : "1";

  if (supportedReligions.includes(id.toLowerCase())) {
    return <ReligionGenderComponent religionName={id.toLowerCase()} gender={gender} pageNumber={currentPage} />;
  }

  if (supportedCountries.includes(id.toLowerCase())) {
    return <CountryGenderComponent countryName={id.toLowerCase()} gender={gender} pageNumber={currentPage} />;
  }


  


  return <div>page</div>;
};

export default GenderWiseNames;
