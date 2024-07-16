export const getData = async (param: string) => {
  try {
    let nameList, positions;

    switch (param) {
      case "dataFile1":
        ({ nameList, positions } = await import(
          "../data/religion/islam/girl/muslim-girl-names"
        ));
        break;
      case "dataFile2":
        ({ nameList, positions } = await import(
          "../data/religion/islam/boy/muslim-boy-names"
        ));
        break;
      case "usaBoyName":
        ({ nameList, positions } = await import(
          "../data/country/usa/boy/usa-boy-names"
        ));
        break;

      case "usagirlName":
        ({ nameList, positions } = await import(
          "../data/country/usa/girl/use-girl-names"
        ));
        break;
      case "indiaBoyName":
        ({ nameList, positions } = await import(
          "../data/country/india/boy/india-boy-names"
        ));
        break;
      case "indiaGirlName":
        ({ nameList, positions } = await import(
          "../data/country/india/girl/india-girl-names"
        ));
        break;
      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return { nameList, positions };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDataUpdated = async (
  country: any,
  religion: any,
  gender: any
) => {
  try {
    let nameList, positions;

    if (!country && !religion) {
      switch (gender) {
        case "boy":
          ({ nameList, positions } = await import(
            "../data/country/usa/boy/usa-boy-names"
          ));
          break;
        case "girl":
          ({ nameList, positions } = await import(
            "../data/country/usa/girl/use-girl-names"
          ));
          break;
        default:
          throw new Error(`No data file found for param: ${gender}`);
      }
    }

    return { nameList, positions };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
