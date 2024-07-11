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
      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return { nameList, positions };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
