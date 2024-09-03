import { countries } from "@/data/countryMetadata";
import { gender } from "@/data/genderMetadata";
import { religions } from "@/data/religionMetadata";

export const articleList = [
  {
    title: "Girls' Names in Hollywood Movies: From Classic to Contemporary",
    image: "/mov-baby.jpg",
    excerpt: `Hollywood movies have long served as a mirror reflecting societal
            trends, including the popularity of names given to characters.`,
    url: "/articles/a/hollywood-movies-baby-names",
  },
  {
    title: "Things to Consider While Choosing a Baby Name",
    image: "/ch-baby.jpg",
    excerpt: ``,
    url: "/articles/a/things-to-consider-while-choosing-a-baby-name",
  },
  {
    title: "Exploring American Baby Names: Diversity and Tradition",
    image: "/am-baby.jpg",
    excerpt: ``,
    url: "/articles/a/american-baby-names",
  },
];

export const ITEMS_PER_PAGE = 100;

export const genderMap = gender.reduce(
  (map, g) => {
    map[g.name.toLowerCase()] = g;
    return map;
  },
  {} as Record<string, any>
);

export const getGenderByName = (name: string) => {
  return genderMap[name.toLowerCase()];
};

export const countryMap = countries.reduce(
  (map, country) => {
    map[country.name.toLowerCase()] = country;
    return map;
  },
  {} as Record<string, any>
);

export const getCountryByName = (name: string) => {
  return countryMap[name.toLowerCase()];
};

export const religionMap = religions.reduce(
  (map, religion) => {
    map[religion.name.toLowerCase()] = religion;
    return map;
  },
  {} as Record<string, any>
);

export const getReligionByName = (name: string) => {
  return religionMap[name.toLowerCase()];
};

export const countryToNumberMap: Map<string, string> = new Map([
  ["usa", "01"],
  ["india", "02"],
]);

export const NumberToCountryMap: Map<string, string> = new Map([
  ["01", "usa"],
  ["02", "india"],
]);

export const religionToNumberMap: Map<string, string> = new Map([
  ["islam", "1"],
  ["hindu", "2"],
  ["christian", "3"],
]);

export const NumberToReligionMap: Map<string, string> = new Map([
  ["1", "islam"],
  ["2", "hindu"],
  ["3", "christian"],
]);
