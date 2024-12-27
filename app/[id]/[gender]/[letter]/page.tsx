import CountryLetterComponent from "@/components/country/CountryLetterComponent";
import ReligionLetterComponent from "@/components/religion/ReligionLetterComponent";
import { supportedCountries, supportedReligions } from "@/utils/constants";
import React from "react";

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
