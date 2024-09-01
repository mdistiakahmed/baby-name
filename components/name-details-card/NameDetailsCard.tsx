import { capitalize } from "@/utils/converters";
import React from "react";

const NameDetailsCard = ({ params, gender }: any) => {
  console.log(params);
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
          <h2 className="text-3xl font-semibold text-gray-800">
            {params.name}
          </h2>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />
      {/* Meaning Section */}
      <div className="mb-4  flex justify-between">
        <div>
          <h3 className="text-xl font-medium text-gray-700">Gender</h3>
          <p className="text-gray-600 mt-1">{capitalize(gender)}</p>
        </div>
        <div className="hidden">
          <h3 className="text-xl font-medium text-gray-700">Origin</h3>
          <p className="text-gray-600 mt-1">Arabic</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Meaning Section */}
      <div className="mb-4">
        <h3 className="text-xl font-medium text-gray-700">Meaning</h3>
        <p className="text-gray-600 mt-1">{params.meaning}</p>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Additional Remarks Section */}
      <div>
        <h3 className="text-xl font-medium text-gray-700">
          Additional Remarks
        </h3>
        <ul>
          {params.stories.map((s: any, index: any) => (
            <li key={index} className="text-gray-600 mt-1">
              {s}
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default NameDetailsCard;
