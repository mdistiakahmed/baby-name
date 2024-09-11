import React from "react";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const NamesByLetterCard = ({ gender }: any) => {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {alphabet.map((letter) => (
          <Link
            href={`/gender/${gender}/${letter}`}
            key={letter}
            className="block text-center py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Baby {gender} name starts with {letter}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NamesByLetterCard;
