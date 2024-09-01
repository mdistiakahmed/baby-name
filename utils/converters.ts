export const capitalize = (input: string): string => {
  if (!input) return "";
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

export const encodeNameIndex = (
  country: any,
  religion: any,
  gender: any,
  pageNumber: any,
  index: any
): string => {
  let countryCode = "00";
  let religionCode = "0";
  let genderCode = "0";
  let pageNumberCode = "000";
  let indexCode = "000";

  return "";
};
