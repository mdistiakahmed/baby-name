import React from "react";

const NameDetailsCard = () => {
  return (
    <div>
      {/* Card Header */}
      <div className="flex items-center mb-4">
        {/* Image Section */}
        <img
          src="/girl_avatar.svg" // Replace with the actual image path
          alt="Name Image"
          className="w-20 h-20 rounded-full border-4 border-gray-200"
        />
        {/* Name Section */}
        <div className="ml-4">
          <h2 className="text-3xl font-semibold text-gray-800">Istiak</h2>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />
      {/* Meaning Section */}
      <div className="mb-4  flex justify-between">
        <div>
          <h3 className="text-xl font-medium text-gray-700">Gender</h3>
          <p className="text-gray-600 mt-1">Girl</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-700">Origin</h3>
          <p className="text-gray-600 mt-1">Arabic</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Meaning Section */}
      <div className="mb-4">
        <h3 className="text-xl font-medium text-gray-700">Meaning</h3>
        <p className="text-gray-600 mt-1">
          Meaning of the name goes here. This could be a sentence or two
          explaining the significance or origin of the name.
        </p>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Additional Remarks Section */}
      <div>
        <h3 className="text-xl font-medium text-gray-700">
          Additional Remarks
        </h3>
        <p className="text-gray-600 mt-1">
          Any additional remarks or interesting facts about the name. This could
          include cultural significance, popularity, or other notable
          information.
        </p>
      </div>
    </div>
  );
};

export default NameDetailsCard;
