import { countries, gender, religions } from "@/utils/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://babynamenestlings.com";
  const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(
    ","
  );

  const mainPages = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 1,
    },
    {
      url: `${BASE_URL}/country`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/religion`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.2,
    },
  ];

  const countryCategories = countries.flatMap((country) => [
    {
      url: `${BASE_URL}/country/${country.name.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    },
    ...gender.flatMap((g) => [
      {
        url: `${BASE_URL}/country/${country.name.toLowerCase()}/${g.name.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as any,
        priority: 0.8,
      },
      ...alphabet.map((letter) => ({
        url: `${BASE_URL}/country/${country.name.toLowerCase()}/${g.name.toLowerCase()}/${letter}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as any,
        priority: 0.5,
      })),
    ]),
  ]);

  const religionCategories = religions.flatMap((religion) => [
    {
      url: `${BASE_URL}/religion/${religion.name.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    },
    ...gender.flatMap((g) => [
      {
        url: `${BASE_URL}/religion/${religion.name.toLowerCase()}/${g.name.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as any,
        priority: 0.8,
      },
      ...alphabet.map((letter) => ({
        url: `${BASE_URL}/religion/${religion.name.toLowerCase()}/${g.name.toLowerCase()}/${letter}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as any,
        priority: 0.5,
      })),
    ]),
  ]);

  const genderCategories = [
    {
      url: `${BASE_URL}/gender`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    },
    ...gender.flatMap((g) => [
      {
        url: `${BASE_URL}/gender/${g.name.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as any,
        priority: 0.8,
      },
      ...alphabet.map((letter) => ({
        url: `${BASE_URL}/gender/${g.name.toLowerCase()}/${letter}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as any,
        priority: 0.5,
      })),
    ]),
  ];

  const siteMapArray = [
    ...mainPages,
    ...countryCategories,
    ...religionCategories,
    ...genderCategories,
  ];

  return siteMapArray;
}
