"use client";

import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getListItemSecondaryActionClassesUtilityClass, Pagination } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PaginationComponent = ({ totalItem, pageNumber }: any) => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pageNumber ? pageNumber : 1);
  const router = useRouter();

  const pageCount = Math.ceil(totalItem / ITEMS_PER_PAGE);
  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
    const newPath = `${pathname}?page=${value}`;
    router.push(newPath);
    
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
