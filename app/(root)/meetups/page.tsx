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
  const type = "meetups";

  return (
    <SharedSidebars contentType={type} filter={filter} page={page}>
      <HomeContent query={filter} currentPage={page} type={type} />
    </SharedSidebars>
  );
};

export default Home;
