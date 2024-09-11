import { capitalize } from "@/utils/converters";
import Link from "next/link";

const NameDetailsCard = ({
  name,
  meaning,
  origin,
  gender,
  stories,
  short,
  id,
}: any) => {
  if (gender) {
    stories.push(`Popularly used as a ${gender} name`);
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={gender === "boy" ? "/boy_avatar.svg" : "/girl_avatar.svg"}
            alt="Name Image"
            className="w-20 h-20 rounded-full border-4 border-gray-200"
          />
          <div className="ml-4 hidden md:block">
            <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>
          </div>
          <div className="ml-4 md:hidden">
            <h3 className="text-3xl font-semibold text-gray-800">{name}</h3>
            {!short && (
              <div className="flex items-center justify-center gap-2 mt-1">
                <img src="/sound.svg" alt="sound icon" className="w-5 h-5" />
                <p className="text-gray-600">Is-tee-ack</p>
              </div>
            )}
          </div>
        </div>

        {!short && (
          <div className="hidden md:block">
            <h3 className="text-xl font-medium text-gray-700">Pronunciation</h3>
            <div className="flex items-center justify-center gap-2 mt-1">
              <img src="/sound.svg" alt="sound icon" className="w-5 h-5" />
              <p className="text-gray-600">Is-tee-ack</p>
            </div>
          </div>
        )}
      </div>

      <hr className="my-4 border-gray-300" />
      <div className="mb-4  flex justify-between">
        <div>
          <h3 className="text-xl font-medium text-gray-700">Gender</h3>
          <p className="text-gray-600 mt-1">{capitalize(gender || "")}</p>
        </div>
        {origin && (
          <div>
            <h3 className="text-xl font-medium text-gray-700">Origin</h3>
            <p className="text-gray-600 mt-1">{origin}</p>
          </div>
        )}
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="mb-4">
        <h3 className="text-xl font-medium text-gray-700">Meaning</h3>
        <p className="text-gray-600 mt-1">
          {name} name meaning is {meaning}
        </p>
      </div>

      <hr className="my-4 border-gray-300" />

      <div hidden={short}>
        <h3 className="text-xl font-medium text-gray-700">
          {name} Name Meaning and History
        </h3>
        <ul className="list-disc">
          {stories?.map((s: any, index: any) => (
            <li key={index} className="text-gray-600 mt-1">
              {s}
            </li>
          ))}
        </ul>
      </div>
      {short ? (
        <div hidden={!short} className="flex items-center justify-center">
          <Link
            href={`/meaning-of-name-${name.toLowerCase()}-${id}`}
            className="bg-[#006fee] text-white font-bold p-2 px-4 rounded-lg cursor-pointer"
          >
            View Details
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default NameDetailsCard;
