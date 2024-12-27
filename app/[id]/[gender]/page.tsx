import CountryGenderComponent from "@/components/country/CountryGenderComponent";
import ReligionGenderComponent from "@/components/religion/ReligionGenderComponent";
import { supportedCountries, supportedReligions } from "@/utils/constants";
import React from "react";

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
