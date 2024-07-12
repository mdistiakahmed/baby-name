export const countries = [
  {
    name: "Bangladesh",
    code: "bd",
    desc: "Bangladeshi",
  },
  {
    name: "India",
    code: "in",
    desc: "Indian",
  },
  {
    name: "Japan",
    code: "jp",
    desc: "Japanese",
  },
  {
    name: "Korea",
    code: "kr",
    desc: "Korean",
  },
  {
    name: "USA",
    code: "us",
    desc: "American",
  },
];

export const religions = [
  {
    name: "Islam",
    desc: "Islamic",
    image: "/islam-icon.svg",
    path: "christian",
  },
  {
    name: "Hindu",
    desc: "Hindu",
    image: "/hindu-temple-icon.svg",
    path: "hindu",
  },
  {
    name: "Christian",
    desc: "Christian",
    image: "/church-icon.svg",
    path: "christian",
  },
  {
    name: "Buddhist",
    desc: "Buddhist",
    image: "/buddhism-icon.svg",
    path: "buddhist",
  },
];

export const gender = [
  {
    name: "Girl",
  },
  {
    name: "Boy",
  },
];

export const countryMap = countries.reduce((map, country) => {
  map[country.name.toLowerCase()] = country;
  return map;
}, {} as Record<string, { name: string; code: string; desc: string }>);

export const getCountryByName = (name: string) => {
  return countryMap[name.toLowerCase()];
};

export const religionMap = religions.reduce((map, religion) => {
  map[religion.name.toLowerCase()] = religion;
  return map;
}, {} as Record<string, { name: string; image: string; desc: string }>);

export const getReligionByName = (name: string) => {
  return religionMap[name.toLowerCase()];
};

export const dummanyNameList = [
  {
    name: "Istiak",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
  {
    name: "Istiak",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
  {
    name: "Istiak",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
];
