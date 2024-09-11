import FamousPeoplesCard from "@/components/name-details-card/FamousPeoplesCard";
import NameDetailsCard from "@/components/name-details-card/NameDetailsCard";
import NamesByLetterCard from "@/components/name-details-card/NamesByLetterCard";
import QuestionAndAnswerCard from "@/components/name-details-card/QuestionAndAnswerCard";
import RelatedBabyNamesListCard from "@/components/name-details-card/RelatedBabyNamesListCard";
import WhatsOnThisPageCard from "@/components/name-details-card/WhatsOnThisPageCard";
import ShareWidget from "@/components/share/ShareWidget";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { decodeNameIndex, encodeNameIndex } from "@/utils/converters";
import { getDataUpdated } from "@/utils/getData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { id } = params;
  const encodedId = id.split("-")[4];
  const { country, religion, gender, pageNumber, index } =
    decodeNameIndex(encodedId);

  let paginatedNameList: any = [];
  let nameDetailsObject: any = {};

  let countryParam = null,
    religionParam = null;

  if (!country && !religion) {
  } else if (!country && religion) {
    religionParam = religion;
  }
  const { nameList } = await getDataUpdated(
    countryParam,
    religionParam,
    gender
  );

  paginatedNameList = nameList?.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  nameDetailsObject = paginatedNameList[index];

  return {
    title: `${nameDetailsObject.name} Name Meaning`,
    description: `What does the name ${nameDetailsObject.name} mean? Find out its origin, meaning, and other interesting facts about this unique name.`,
    openGraph: {
      title: `${nameDetailsObject.name} Name Meaning`,
      description: `What does the name ${nameDetailsObject.name} mean? Find out its origin, meaning, and other interesting facts about this unique name.`,
      type: "article",
      locale: "en_US",
      url: `http://babynamenestlings.com/name-details/${id}`,
      siteName: "BabyNameNestlings",
      images: [
        {
          url: "/baby.webp",
          width: 1200,
          height: 630,
          alt: "Smiling babies",
        },
      ],
    },
  };
}

const NameDetails = async ({ params }: any) => {
  const { id } = params;
  const encodedId = id.split("-")[4];
  const { country, religion, gender, pageNumber, index } =
    decodeNameIndex(encodedId);

  console.log(country, religion, gender, pageNumber, index);

  let paginatedNameList: any = [];
  let nameDetailsObject: any = {};
  const similarNames = [];

  let countryParam = null,
    religionParam = null;

  if (!country && !religion) {
  } else if (!country && religion) {
    religionParam = religion;
  }
  const { nameList } = await getDataUpdated(
    countryParam,
    religionParam,
    gender
  );

  paginatedNameList = nameList?.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  nameDetailsObject = paginatedNameList[index];
  nameDetailsObject.gender = gender;
  nameDetailsObject.code = id;

  const actualItemPosition = (pageNumber - 1) * ITEMS_PER_PAGE + index;
  let currentStart = actualItemPosition - 1;
  let totalSimilarTake = 0;

  while (totalSimilarTake < 10 && nameList && currentStart > 0) {
    const updatedPageNumber = Math.floor(currentStart / ITEMS_PER_PAGE) + 1;
    const updatedPageIndex = currentStart % ITEMS_PER_PAGE;

    const id = encodeNameIndex(
      country,
      religion,
      gender,
      updatedPageNumber,
      updatedPageIndex
    );
    similarNames.push({ ...nameList[currentStart], id });
    currentStart--;
    totalSimilarTake++;
  }

  currentStart = actualItemPosition + 1;

  while (totalSimilarTake < 10 && nameList && currentStart < nameList.length) {
    const updatedPageNumber = Math.floor(currentStart / ITEMS_PER_PAGE) + 1;
    const updatedPageIndex = currentStart % ITEMS_PER_PAGE;
    const id = encodeNameIndex(
      country,
      religion,
      gender,
      updatedPageNumber,
      updatedPageIndex
    );
    similarNames.push({ ...nameList[currentStart], id });

    currentStart++;
    totalSimilarTake++;
  }

  const famousPople = ["a", "b", "c", "d", "e", "f", "g"];

  return (
    <div className="flex items-center justify-center w-full  bg-gray-100 ">
      <div className="w-[95vw] md:w-[70vw] p-2 md:p-6">
        <NameDetailsCard {...nameDetailsObject} gender={gender} />
        <div className="flex items-center gap-4 p-2 justify-end">
          <p className="font-medium">Share on</p>
          <ShareWidget />
        </div>

        <div>
          <WhatsOnThisPageCard name={nameDetailsObject.name} />
        </div>

        <h2 className="text-2xl font-bold py-10 underline" id="famous-people">
          Famous People Named {nameDetailsObject.name}
        </h2>
        <div className="flex flex-col md:flex-row gap-5 overflow-x-auto p-2">
          {famousPople.map((s, index) => (
            <div key={index} className="min-w-[300px] gap-4">
              <FamousPeoplesCard />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold py-10 underline" id="similar-names">
          Similar Names
        </h2>

        <div className="flex flex-col md:flex-row gap-5 overflow-x-auto p-2">
          {similarNames.map((s, index) => (
            <div key={index} className="min-w-[300px] gap-4">
              <NameDetailsCard {...s} gender={gender} short={true} />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold py-10 underline" id="faq">
          Frequently Asked Questions
        </h2>
        <div>
          <QuestionAndAnswerCard {...nameDetailsObject} />
        </div>

        <h2
          className="text-2xl font-bold py-10 underline"
          id="related-baby-names"
        >
          Related Baby Names Lists
        </h2>
        <div className="my-5">
          <RelatedBabyNamesListCard />
        </div>

        <h2
          className="text-2xl font-bold py-10 underline"
          id="baby-names-letter"
        >
          Baby Names by Letter
        </h2>
        <div className="my-5">
          <NamesByLetterCard gender={gender} />
        </div>
      </div>
    </div>
  );
};

export default NameDetails;
