import Link from "next/link";
import React from "react";

const WhatsOnThisPageCard = ({ name }: any) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-6">
      <h3 className="text-xl font-bold mb-4">What's On This Page</h3>
      <ul className="list-disc list-inside">
        <li>
          <Link href="#famous-people" className="text-blue-500 hover:underline">
            Famous People Named {name}
          </Link>
        </li>
        <li>
          <Link href="#similar-names" className="text-blue-500 hover:underline">
            Similar Names
          </Link>
        </li>
        <li>
          <Link href="#faq" className="text-blue-500 hover:underline">
            Frequently Asked Questions
          </Link>
        </li>
        <li>
          <Link
            href="#related-baby-names"
            className="text-blue-500 hover:underline"
          >
            Related Baby Names Lists
          </Link>
        </li>
        <li>
          <Link
            href="#baby-names-letter"
            className="text-blue-500 hover:underline"
          >
            Baby Names by Letter
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WhatsOnThisPageCard;
