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
    <SharedSidebars contentType="posts" filter={filter} page={page}>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<Loader content="posts" />}
      >
        <HomeContent type="posts" query={filter} currentPage={page} />
      </Suspense>
    </SharedSidebars>
  );
};

export default Home;
