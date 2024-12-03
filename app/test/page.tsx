import React from "react";

const page = () => {
  const x = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return <div>page {x}</div>;
};

export default page;
