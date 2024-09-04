import React, { Suspense } from "react";

import HomeContent from "@/components/home/HomeContent";
import SharedSidebars from "@/components/layout/SharedSidebars";
import Loader from "@/components/shared/Loader";

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const filter =
    (searchParams.filter as "newest" | "popular" | "following") || "newest";
  const page = Number(searchParams.page) || 1;

  return (
    <SharedSidebars contentType="groups" page={page} filter={filter!}>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<Loader content="groups" />}
      >
        <HomeContent query={filter} currentPage={page} type="groups" />
      </Suspense>
    </SharedSidebars>
  );
};

export default Home;
