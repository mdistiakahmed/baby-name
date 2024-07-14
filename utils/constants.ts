export const countries = [
  {
    name: "Bangladesh",
    code: "bd",
    desc: "Bangladeshi",
    shortDescription:
      "Explore traditional and modern Bangladeshi baby names with rich cultural heritage.",
  },
  {
    name: "India",
    code: "in",
    desc: "Indian",
    shortDescription:
      "Discover beautiful Indian baby names that reflect a vibrant culture and heritage.",
  },
  {
    name: "Japan",
    code: "jp",
    desc: "Japanese",
    shortDescription:
      "Find unique Japanese baby names inspired by ancient traditions and modern trends.",
  },
  {
    name: "Korea",
    code: "kr",
    desc: "Korean",
    shortDescription:
      "Uncover Korean baby names that blend traditional values with contemporary appeal.",
  },
  {
    name: "USA",
    code: "us",
    desc: "American",
    shortDescription:
      "Browse American baby names that range from classic to modern, reflecting diverse influences.",
  },
];

export const religions = [
  {
    name: "Islam",
    desc: "Islamic",
    image: "/islam-icon.svg",
    path: "islam",
    shortDescription:
      "Discover meaningful Islamic baby names inspired by rich traditions and values.",
  },
  {
    name: "Hindu",
    desc: "Hindu",
    image: "/hindu-temple-icon.svg",
    path: "hindu",
    shortDescription:
      "Explore beautiful Hindu baby names that reflect spiritual beliefs and cultural heritage.",
  },
  {
    name: "Christian",
    desc: "Christian",
    image: "/church-icon.svg",
    path: "christian",
    shortDescription:
      "Find classic and modern Christian baby names inspired by biblical traditions.",
  },
  {
    name: "Buddhist",
    desc: "Buddhist",
    image: "/buddhism-icon.svg",
    path: "buddhist",
    shortDescription:
      "Uncover serene Buddhist baby names that embody peace and enlightenment.",
  },
];

export const gender = [
  {
    name: "Girl",
    image: "/young-girl-icon.svg",
    shortDescription:
      "Explore a variety of beautiful baby names perfect for your little girl.",
  },
  {
    name: "Boy",
    image: "/young-boy-icon.svg",
    shortDescription:
      "Discover strong and unique baby names ideal for your baby boy.",
  },
];

export const ITEMS_PER_PAGE = 50;

export const genderMap = gender.reduce((map, g) => {
  map[g.name.toLowerCase()] = g;
  return map;
}, {} as Record<string, { name: string; image: string }>);

export const getGenderByName = (name: string) => {
  return genderMap[name.toLowerCase()];
};

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
    name: "Mohammad",
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
    name: "Ahmed",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
  {
    name: "Ahmed",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
  {
    name: "Mohammad",
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
    name: "Ahmed",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
  {
    name: "Ahmed",
    meaning: "Love, Affection, Attraction",
    stories: [
      "Md Istiak Ahmed was a great computer scientiest born in 1994.",
      "Istiak Ashiq was a novelist who wrote Gitanjoli",
    ],
  },
];
