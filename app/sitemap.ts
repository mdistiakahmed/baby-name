import { countries } from "@/data/countryMetadata";
import { gender } from "@/data/genderMetadata";
import { religions } from "@/data/religionMetadata";
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
      changeFrequency: "daily" as any,
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as any,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as any,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as any,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily" as any,
      priority: 0.9,
    },
  ];

  const countryCategories = countries.flatMap((country) => [
    {
      url: `${BASE_URL}/${country.name.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.7,
    },
    ...gender.flatMap((g) => [
      {
        url: `${BASE_URL}/${country.name.toLowerCase()}/${g.name.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as any,
        priority: 0.6,
      },
    ]),
  ]);

  const religionCategories = religions.flatMap((religion) => [
    {
      url: `${BASE_URL}/${religion.name.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.7,
    },
    ...gender.flatMap((g) => [
      {
        url: `${BASE_URL}/${religion.name.toLowerCase()}/${g.name.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as any,
        priority: 0.6,
      },
    ]),
  ]);

  const alphabetCategories = alphabet.flatMap((letter) => [
    ...religions.flatMap((religion) => 
      gender.flatMap((g) => [
        {
          url: `${BASE_URL}/${religion.name.toLowerCase()}/${g.name.toLowerCase()}/${letter.toLowerCase()}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.4,
        }
      ])
    )
  ]);

  return [
    ...mainPages,
    ...countryCategories,
    ...religionCategories,
    ...alphabetCategories,
  ];
}
