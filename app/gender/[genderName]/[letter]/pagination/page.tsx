"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PaginationPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, [router]);

  return <div>Redirecting...</div>;
};

export default PaginationPage;
