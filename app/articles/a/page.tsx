"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/articles");
  }, [router]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
