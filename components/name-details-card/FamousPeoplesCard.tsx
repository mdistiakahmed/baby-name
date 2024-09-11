import React from "react";

const FamousPeoplesCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-10">
      <div className="flex gap-5">
        <h3 className="text-lg font-medium text-gray-700">Name: </h3>
        <p className="text-gray-600 mt-1">Md Isiak Ahmed</p>
      </div>

      <div className="flex gap-5">
        <h3 className="text-lg font-medium text-gray-700">Profession: </h3>
        <p className="text-gray-600 mt-1">Teacher</p>
      </div>
    </div>
  );
};

export default FamousPeoplesCard;
