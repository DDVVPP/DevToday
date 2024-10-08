import HomeContent from "@/components/home/HomeContent";
import SharedSidebars from "@/components/layout/SharedSidebars";

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
      <HomeContent type="posts" query={filter} currentPage={page} />
    </SharedSidebars>
  );
};

export default Home;
