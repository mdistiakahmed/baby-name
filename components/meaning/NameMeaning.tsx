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

const NameMeaning = async ({id}: any) => {
    const encodedId = id.split("-")[4];
    const { country, religion, gender, pageNumber, index } =
      decodeNameIndex(encodedId);
  
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
  
    return (
      <>
        <div className="flex items-center justify-center w-full bg-gray-100">
          <main className="w-[95vw] md:w-[70vw] p-2 md:p-6">
            <article itemScope itemType="https://schema.org/Article">
              <NameDetailsCard {...nameDetailsObject} gender={gender} />
              <div className="flex items-center gap-4 p-2 justify-end">
                <p className="font-medium">Share on</p>
                <ShareWidget />
              </div>
  
              <nav aria-label="Table of Contents">
                <WhatsOnThisPageCard name={nameDetailsObject.name} />
              </nav>
  
              <section aria-label="Famous People" className="my-8">
                <h2 className="text-2xl font-bold py-10 underline" id="famous-people">
                  Famous People Named {nameDetailsObject.name}
                </h2>
                <div className="flex flex-col md:flex-row gap-5 overflow-x-auto p-2">
                  {nameDetailsObject.peoples.map((s: any, index: any) => (
                    <div key={index} className="min-w-[300px] gap-4">
                      <FamousPeoplesCard people={s} />
                    </div>
                  ))}
                </div>
              </section>
  
              <section aria-label="Similar Names" className="my-8">
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
              </section>
  
              <section aria-label="FAQ" className="my-8">
                <h2 className="text-2xl font-bold py-10 underline" id="faq">
                  Frequently Asked Questions
                </h2>
                <div>
                  <QuestionAndAnswerCard {...nameDetailsObject} />
                </div>
              </section>
  
              <section aria-label="Related Names" className="my-8">
                <h2 className="text-2xl font-bold py-10 underline" id="related-baby-names">
                  Related Baby Names Lists
                </h2>
                <div className="my-5">
                  <RelatedBabyNamesListCard
                    religion={religion}
                    gender={gender}
                    name={nameDetailsObject.name}
                  />
                </div>
              </section>
  
              <section aria-label="Names by Letter" className="my-8">
                <h2 className="text-2xl font-bold py-10 underline" id="baby-names-letter">
                  Baby Names by Letter
                </h2>
                <div className="my-5">
                  <NamesByLetterCard gender={gender} />
                </div>
              </section>
            </article>
          </main>
        </div>
      </>
    );
}

export default NameMeaning