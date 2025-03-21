"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

const generateBreadcrumbs = (pathname: string) => {
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const displayName = segment.toUpperCase();

    return { href, displayName };
  });
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="overflow-x-auto max-w-full">
      <Breadcrumbs className="p-4">
        <BreadcrumbItem key={1000}>
          <Link href="/">HOME</Link>
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={index}>
            <Link href={breadcrumb.href}>{breadcrumb.displayName}</Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
