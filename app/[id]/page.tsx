import CountryComponent from "@/components/country/CountryComponent";
import NameMeaning from "@/components/meaning/NameMeaning";
import ReligionComponent from "@/components/religion/ReligionComponent";
import { ITEMS_PER_PAGE, supportedCountries, supportedReligions } from "@/utils/constants";
import { decodeNameIndex, encodeNameIndex } from "@/utils/converters";
import { getDataUpdated } from "@/utils/getData";
import { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: any): Promise<Metadata | undefined> {
//   const { id } = params;
//   const encodedId = id.split("-")[4];
//   const { country, religion, gender, pageNumber, index } =
//     decodeNameIndex(encodedId);

//   let paginatedNameList: any = [];
//   let nameDetailsObject: any = {};

//   let countryParam = null,
//     religionParam = null;

//   if (!country && !religion) {
//   } else if (!country && religion) {
//     religionParam = religion;
//   }
//   const { nameList } = await getDataUpdated(
//     countryParam,
//     religionParam,
//     gender
//   );

//   paginatedNameList = nameList?.slice(
//     (pageNumber - 1) * ITEMS_PER_PAGE,
//     pageNumber * ITEMS_PER_PAGE
//   );

//   nameDetailsObject = paginatedNameList[index];

//   const nameTitle = `${nameDetailsObject.name} Name Meaning${religion ? ` - ${religion} Baby Names` : ''}${gender ? ` for ${gender}` : ''}`;
//   const nameDescription = `Discover the meaning of ${nameDetailsObject.name}${religion ? ` in ${religion}` : ''} culture${gender ? ` for ${gender}` : ''}. Learn about its origin, significance, and why parents choose this name for their babies.`;

//   return {
//     title: nameTitle,
//     description: nameDescription,
//     keywords: `${nameDetailsObject.name}, baby name meaning, ${religion || ''} baby names, ${gender || ''} baby names, name origin, name significance`,
//     openGraph: {
//       title: nameTitle,
//       description: nameDescription,
//       type: "article",
//       locale: "en_US",
//       siteName: "Baby Name Nestlings",
//       modifiedTime: new Date().toISOString(),
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: nameTitle,
//       description: nameDescription,
//     },
//     alternates: {
//       canonical: `/${id}`,
//     },
//   };
// }

const NameDetails = async ({ params }: any) => {
  const { id } = params;
  console.log("===>",id);

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
