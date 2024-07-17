import Image from "next/image";

const AmericanBabyNames = () => {
  const boyNameArray = [
    {
      name: "Liam",
      origin: "Irish",
      meaning: `Derived from William, meaning "strong-willed warrior"`,
    },
    {
      name: "Noah",
      origin: "Hebrew",
      meaning: `Means "rest" or "comfort"`,
    },
    {
      name: "William",
      origin: "English",
      meaning: `From Old Norman French, meaning "will, desire"`,
    },
    {
      name: "James",
      origin: "English",
      meaning: `Derived from the Hebrew name Jacob, meaning "supplanter"`,
    },
    {
      name: "Oliver",
      origin: "Latin",
      meaning: `From the Latin word "oliva," meaning "olive tree"`,
    },
    {
      name: "Benjamin",
      origin: "Hebrew",
      meaning: `Means "son of the right hand"`,
    },
    {
      name: "Elijah",
      origin: "Hebrew",
      meaning: `Means "my God is Yahweh"`,
    },
    {
      name: "Lucas",
      origin: "Greek",
      meaning: `From Greek "Loukas," meaning "from Lucania"`,
    },
    {
      name: "Mason",
      origin: "English",
      meaning: `Occupational name for a stoneworker or bricklayer`,
    },
    {
      name: "Logan",
      origin: "Scottish",
      meaning: `Derived from a Scottish place name, meaning "small hollow"`,
    },
  ];

  const girlNameArray = [
    {
      name: "Emma",
      origin: "Germanic",
      meaning: `Derived from the Germanic word "ermen," meaning "whole" or "universal"`,
    },
    {
      name: "Olivia",
      origin: "Latin",
      meaning: `From the Latin word "oliva," meaning "olive tree"`,
    },
    {
      name: "Ava",
      origin: "Latin",
      meaning: `From the Latin word "avis," meaning "bird"`,
    },
    {
      name: "Isabella",
      origin: "Hebrew",
      meaning: `Feminine form of "Isabel," meaning "God is my oath"`,
    },
    {
      name: "Sophia",
      origin: "Greek",
      meaning: `From the Greek word "sophia," meaning "wisdom"`,
    },
    {
      name: "Amelia",
      origin: "Germanic",
      meaning: `Derived from the Germanic word "amal," meaning "work" or "industrious"`,
    },
    {
      name: "Mia",
      origin: "Scandinavian",
      meaning: `Derived from "Mia," a diminutive of Maria, meaning "mine" or "bitter"`,
    },
    {
      name: "Harper",
      origin: "English",
      meaning: `Occupational name for a harp player`,
    },
    {
      name: "Evelyn",
      origin: "English",
      meaning: `From an English surname, derived from a Norman French form of the given name Aveline, a diminutive of Avila, itself of unknown meaning`,
    },
    {
      name: "Abigail",
      origin: "Hebrew",
      meaning: `Means "my father is joyful"`,
    },
  ];

  const topTabls = (
    <div className="max-w-full overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Top American Baby Names</h2>

      <div className="shadow-md rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-4 py-2 text-lg font-semibold">
          Top American Boy Names
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Origin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {boyNameArray.map((boy, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{boy.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{boy.origin}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{boy.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="shadow-md rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-4 py-2 text-lg font-semibold">
          Top American Girl Names
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Origin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {girlNameArray.map((boy, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{boy.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{boy.origin}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{boy.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px] text-black">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-2xl font-bold text-center leading-relaxed">
            Exploring American Baby Names: Diversity and Tradition
          </h1>
          <div className="flex items-center justify-center h-[200px] md:h-[350px]">
            <Image
              src="/american-baby.webp"
              height={400}
              width={400}
              className="h-[200px] md:h-[350px] w-auto"
              alt="American Baby"
            />
          </div>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            American baby names reflect the rich tapestry of cultures,
            traditions, and influences that make up the United States. From
            classic names rooted in European heritage to modern creations and
            names inspired by various ethnicities, American baby names offer a
            wide array of choices for parents. Here&apos;s a look into the world
            of American baby names:
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            Top American Baby Names
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Here are the top 10 American baby names for boys and girls in recent
            years, along with their origins and meanings:
          </p>

          {topTabls}

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            1. Diversity of Origins
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            American baby names draw inspiration from diverse sources around the
            globe. They reflect the melting pot of cultures that characterize
            the American population. Names can be of English, Irish, Italian,
            German, Spanish, African American, Native American, and many other
            origins. This diversity allows parents to choose names that resonate
            with their family&apos;s heritage or simply sound appealing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            2. Classic and Timeless Names
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Many American baby names are classic and timeless, passed down
            through generations. These names often have historical significance
            or literary connections, such as &quot;Elizabeth,&quot;
            &quot;William,&quot; &quot;Emily,&quot; or &quot;Alexander.&quot;
            They maintain popularity over decades, offering a sense of tradition
            and stability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            3. Pop Culture Influences
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            American pop culture, including movies, television, music, and
            celebrities, also heavily influences baby names. Names of famous
            actors, characters from beloved films and TV shows, and popular
            musicians often see spikes in popularity. Examples include
            &quot;Arya&quot; from &quot;Game of Thrones,&quot;
            &quot;Harper&quot; after Harper Lee, and &quot;Beyoncé&quot; after
            the famous singer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            4. Regional Variations
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            The vast geographical and cultural diversity across the United
            States contributes to regional variations in baby names. Certain
            names may be more popular in specific regions due to cultural or
            linguistic influences. For instance, names with Spanish origins
            might be more prevalent in states with large Hispanic populations
            like California and Texas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            5. Uniqueness and Creativity
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            American parents often embrace creativity when choosing baby names.
            They may alter spellings, combine names, or invent completely new
            ones. This trend towards uniqueness allows parents to give their
            child a name that stands out while still being meaningful to them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            6. Gender-Neutral Names
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Gender-neutral names are gaining popularity in the United States as
            parents seek names that aren&apos;t tied to traditional gender
            norms. Names like &quot;Jordan,&quot; &quot;Taylor,&quot;
            &quot;Sawyer,&quot; and &quot;Riley&quot; are chosen for their
            versatility and modern appeal, suitable for any child regardless of
            gender.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            7. Names with Symbolic Meaning
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Many American parents choose names that carry symbolic meaning or
            reflect personal values. Names with positive attributes like
            &quot;Grace,&quot; &quot;Hope,&quot; &quot;Justice,&quot; or
            &quot;Valor&quot; are popular choices, embodying virtues that
            parents hope their children will embody.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            8. Ethnic and Cultural Pride
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Ethnic and cultural pride play a significant role in naming choices
            among American families. Names that honor cultural heritage, such as
            &quot;Mohammed,&quot; &quot;Lakshmi,&quot; &quot;Liam,&quot; or
            &quot;Makayla,&quot; celebrate diversity and connect children to
            their roots.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-4">Conclusion</h2>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            American baby names encompass a wide spectrum of styles, from
            traditional to modern, reflecting the country&apos;s multicultural
            identity and evolving societal trends. Whether inspired by family
            traditions, pop culture icons, regional influences, or personal
            creativity, choosing an American baby name is a deeply personal and
            meaningful decision for parents. It&apos;s a way to celebrate
            heritage, express individuality, and set the stage for a
            child&apos;s unique identity in the rich tapestry of American
            society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmericanBabyNames;
