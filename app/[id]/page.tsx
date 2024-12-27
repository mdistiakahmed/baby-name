import CountryComponent from "@/components/country/CountryComponent";
import NameMeaning from "@/components/meaning/NameMeaning";
import ReligionComponent from "@/components/religion/ReligionComponent";
import { supportedCountries, supportedReligions } from "@/utils/constants";
import { Metadata } from "next";

export function generateStaticParams() {
  const religions = supportedReligions;
  const countries = supportedCountries;

  const params: Array<{id: string}> = [
    ...religions.map(religion => ({ id: religion })),
    ...countries.map(country => ({ id: country }))
  ];

  return params;
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { id } = params;
  
  // Case 1: Religion-based Names
  if (supportedReligions.includes(id.toLowerCase())) {
    const religionName = id === "islam"? "Muslim" : id.charAt(0).toUpperCase() + id.slice(1);
    return {
      title: `${religionName} Baby Names | Meaningful Names from ${religionName} Culture`,
      description: `Explore a comprehensive collection of beautiful baby names from ${religionName} religious traditions. Find meaningful names that reflect cultural heritage and spiritual significance.`,
      keywords: [
        `${religionName} baby names`,
        `${religionName} name meanings`,
        `cultural ${religionName} names`,
        `traditional ${religionName} baby names`,
        'religious baby names'
      ],
      openGraph: {
        title: `${religionName} Baby Names | Cultural Naming Guide`,
        description: `Discover meaningful baby names from ${religionName} religious traditions.`,
        type: "website",
        locale: "en_US",
        siteName: "Baby Name Nestlings",
      }
    };
  }

  // Case 2: Country-based Names
  const supportedCountries = ['usa', 'india-tamil'];
  if (supportedCountries.includes(id.toLowerCase())) {
    const countryName = id === 'usa' ? 'United States' : 'Tamil';
    return {
      title: `${countryName} Baby Names | Unique Names from ${countryName}`,
      description: `Explore a diverse collection of baby names from ${countryName}. Find unique, culturally rich names that celebrate the heritage and traditions of ${countryName}.`,
      keywords: [
        `${id} baby names`,
        `${countryName} baby names`,
        'cultural baby names',
        'traditional names',
        'international baby names'
      ],
      openGraph: {
        title: `${countryName} Baby Names | Cultural Naming Guide`,
        description: `Discover unique baby names from ${countryName}'s rich cultural landscape.`,
        type: "website",
        locale: "en_US",
        siteName: "Baby Name Nestlings",
      }
    };
  }

  // Case 3: Specific Name Meaning
  if (id.startsWith('meaning')) {
    const name = id.split("-")[3].charAt(0).toUpperCase() + id.split("-")[3].slice(1);
    return {
      title: `${name} Name Meaning | Origin, Significance, and Cultural Context`,
      description: `Discover the deep meaning, origin, and cultural significance of the name ${name}. Explore its linguistic roots, historical context, and why parents choose this beautiful name.`,
      keywords: [
        `${name} name meaning`,
        `${name} name origin`,
        'baby name significance',
        'name etymology',
        'cultural baby names'
      ],
      openGraph: {
        title: `${name} Name Meaning | Comprehensive Name Guide`,
        description: `Uncover the rich meaning and cultural significance behind the name ${name}.`,
        type: "article",
        locale: "en_US",
        siteName: "Baby Name Nestlings",
      }
    };
  }

  // Default metadata if no specific case matches
  return {
    title: "Baby Name Nestlings | Discover Meaningful Names",
    description: "Explore a world of beautiful, meaningful baby names across cultures, religions, and countries.",
    keywords: [
      'baby names',
      'name meanings',
      'cultural names',
      'international baby names'
    ]
  };
}


const NameDetails = async ({ params }: any) => {
  const { id } = params;

  // Condition 1: Check for religions
  if (supportedReligions.includes(id.toLowerCase())) {
    return <ReligionComponent religionName={id.toLowerCase()} />;
  }

  // Condition 2: Check for countries
  if (supportedCountries.includes(id.toLowerCase())) {
    return <CountryComponent countryName={id.toLowerCase()} />;
  }

  

  if (id.startsWith('meaning')) {
   return (<NameMeaning id={id} />);
  }
  
};

export default NameDetails;
