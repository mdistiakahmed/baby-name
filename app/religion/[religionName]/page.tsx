import React from "react";

const ReligionPage = ({ params }: any) => {
  const { religionName } = params;
  return <div>reliogion {religionName}</div>;
};

export default ReligionPage;
