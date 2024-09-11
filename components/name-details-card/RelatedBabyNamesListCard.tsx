import React from "react";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const RelatedBabyNamesListCard = () => {
  const lists = [
    { name: `Baby Boy Names`, link: `` },
    { name: `Baby Girl Names`, link: `` },
    { name: `Boy Name Starts with X`, link: `` },
    { name: `Girl Names Starts with X`, link: `` },
  ];
  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {lists.map((item, index) => (
          <Link
            href={`/gender//${item.link}`}
            key={index}
            className="block text-center py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBabyNamesListCard;
