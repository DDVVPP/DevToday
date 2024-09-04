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
    <SharedSidebars contentType="groups" page={page} filter={filter!}>
      <HomeContent query={filter} currentPage={page} type="groups" />
    </SharedSidebars>
  );
};

export default Home;
