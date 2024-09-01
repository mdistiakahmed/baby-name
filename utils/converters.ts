import {
  countryToNumberMap,
  NumberToCountryMap,
  NumberToReligionMap,
  religionToNumberMap,
} from "./constants";

export const capitalize = (input: string): string => {
  if (!input) return "";
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

export const encodeNameIndex = (
  country: any,
  religion: any,
  gender: string,
  pageNumber: number,
  index: number
): string => {
  let countryCode = "00";
  let religionCode = "0";
  let genderCode = "0";
  let pageNumberCode = "000";
  let indexCode = "000";

  if (countryToNumberMap.get(country?.toLowerCase())) {
    countryCode = countryToNumberMap.get(country) as string;
  }

  if (religionToNumberMap.get(religion)) {
    religionCode = religionToNumberMap.get(religion) as string;
  }

  if (gender) {
    genderCode = gender === "boy" ? "1" : "2";
  }

  // Convert pageNumber to a 3-digit string with leading zeros if necessary
  pageNumberCode = pageNumber.toString().padStart(3, "0");

  // Convert index to a 3-digit string with leading zeros if necessary
  indexCode = index.toString().padStart(3, "0");

  return countryCode + religionCode + genderCode + pageNumberCode + indexCode;
};

export const decodeNameIndex = (encodedString: string) => {
  // Extract parts of the encoded string
  const countryCode = encodedString.slice(0, 2); // First two characters for country code
  const religionCode = encodedString.slice(2, 3); // Next character for religion code
  const genderCode = encodedString.slice(3, 4); // Next character for gender code
  const pageNumberCode = encodedString.slice(4, 7); // Next three characters for page number
  const indexCode = encodedString.slice(7, 10); // Last three characters for index

  // Convert codes back to their corresponding names
  const country = NumberToCountryMap.get(countryCode);
  const religion = NumberToReligionMap.get(religionCode);

  // Convert gender code back to gender string
  let gender = "unknown";
  if (genderCode === "1") {
    gender = "boy";
  } else if (genderCode === "2") {
    gender = "girl";
  }

  // Convert page number and index codes to numbers
  const pageNumber = parseInt(pageNumberCode, 10);
  const index = parseInt(indexCode, 10);

  return { country, religion, gender, pageNumber, index };
};
