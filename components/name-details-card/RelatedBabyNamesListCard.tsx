import React from "react";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const RelatedBabyNamesListCard = ({ religion, gender, name }: any) => {
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';

  const getLists = () => {
    const lists = [];

    if (religion && gender) {
      lists.push({
        name: `${religion.charAt(0).toUpperCase() + religion.slice(1)} ${gender.charAt(0).toUpperCase() + gender.slice(1)} Baby Names`,
        link: `${religion.toLowerCase()}/${gender.toLowerCase()}`
      });

      if (firstLetter) {
        lists.push({
          name: `${religion.charAt(0).toUpperCase() + religion.slice(1)} ${gender.charAt(0).toUpperCase() + gender.slice(1)} Baby Names Starting with ${firstLetter}`,
          link: `${religion.toLowerCase()}/${gender.toLowerCase()}/${firstLetter.toLowerCase()}`
        });
      }
    }

    if (religion) {
      lists.push({
        name: `${religion.charAt(0).toUpperCase() + religion.slice(1)} Baby Names`,
        link: `${religion.toLowerCase()}`
      });

      
    }

    return lists;
  };

  const lists = getLists();

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {lists.map((item, index) => (
          <Link
            href={`/religion/${item.link}`}
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
