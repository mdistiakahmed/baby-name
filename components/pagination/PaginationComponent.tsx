"use client";

import { Pagination } from "@mui/material";
import { useState } from "react";

const PaginationComponent = ({
  totalItem,
  itemsPerPage,
  nextPageBaseUrl,
}: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(totalItem / itemsPerPage);
  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
    console.log(`Current page is ${value}`);
  };
  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={handlePageChange}
      variant="outlined"
      color="secondary"
      size="small"
    />
  );
};

export default PaginationComponent;
