import NameDetailsCard from "@/components/name-details-card/NameDetailsCard";
import React from "react";

const NameDetails = ({ params }: any) => {
  console.log(params);
  return (
    <div className="flex items-center justify-center w-full py-10  bg-gray-100">
      <div className="w-[95vw] md:w-[70vw] bg-white rounded-lg shadow-lg p-6">
        <NameDetailsCard />
      </div>
    </div>
  );
};

export default NameDetails;
