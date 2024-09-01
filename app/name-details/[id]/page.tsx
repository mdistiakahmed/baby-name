import NameDetailsCard from "@/components/name-details-card/NameDetailsCard";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { decodeNameIndex } from "@/utils/converters";
import { getDataUpdated } from "@/utils/getData";
import React from "react";

const NameDetails = async ({ params }: any) => {
  const { id } = params;
  const encodedId = id.split("-")[1];
  const { country, religion, gender, pageNumber, index } =
    decodeNameIndex(encodedId);

  let paginatedNameList: any = [];

  if (!country && !religion) {
    const { nameList } = await getDataUpdated(null, null, gender);

    paginatedNameList = nameList?.slice(
      (pageNumber - 1) * ITEMS_PER_PAGE,
      pageNumber * ITEMS_PER_PAGE
    );
  }

  return (
    <div className="flex items-center justify-center w-full py-10  bg-gray-100">
      <div className="w-[95vw] md:w-[70vw] bg-white rounded-lg shadow-lg p-6">
        <NameDetailsCard params={paginatedNameList[index]} gender={gender} />
      </div>
    </div>
  );
};

export default NameDetails;
