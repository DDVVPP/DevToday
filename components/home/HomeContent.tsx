import React from "react";
import { getDynamicPosts } from "@/lib/actions/post.actions";
import Pagination from "../shared/Pagination";
import PostCard from "../profile/posts/PostCard";
import { getDynamicMeetups } from "@/lib/actions/meetup.actions";
import MeetupCard from "../profile/posts/MeetupCard";
import { getDynamicPodcasts } from "@/lib/actions/podcast.actions";
import PodcastCard from "../profile/posts/PodcastCard";
import { getDynamicGroups } from "@/lib/actions/group.actions";
import GroupCard from "../profile/posts/GroupCard";

interface HomeContentProps {
  type: "meetups" | "posts" | "podcasts" | "groups";
  query?: "newest" | "popular" | "following";
  currentPage: number;
}
const HomeContent = async ({
  type,
  query = "newest",
  currentPage,
}: HomeContentProps) => {
  const renderContent = async (
    type: "meetups" | "posts" | "podcasts" | "groups",
    query: "newest" | "popular" | "following" | "joined"
  ) => {
    if (type === "posts" && query !== "joined") {
      const { posts, totalPages } = (await getDynamicPosts(
        currentPage,
        query,
        4
      )) as { posts: any[]; totalPages: number };

      return (
        <div className="flex min-h-screen w-full flex-1 flex-col gap-y-[20px] max-lg:py-5">
          {posts &&
            posts.map((post, idx) => (
              <PostCard
                key={post.id}
                index={idx}
                post={post}
                userData={post?.user!}
              />
            ))}
          <div className="mt-5 flex  justify-center">
            <Pagination totalPages={totalPages!} currentPage={currentPage} />
          </div>
        </div>
      );
    }
    if (type === "meetups" && query !== "joined") {
      const meetups = await getDynamicMeetups(currentPage, query, 4);
      return (
        <div className="flex min-h-screen w-full flex-1 flex-col gap-y-[20px]  max-lg:py-5">
          {meetups &&
            meetups.meetups.map((meetup, idx) => (
              <MeetupCard key={meetup.id} index={idx} meetup={meetup} />
            ))}
          <div className="mt-5 flex  justify-center">
            <Pagination
              totalPages={meetups?.totalPages!}
              currentPage={currentPage}
            />
          </div>
        </div>
      );
    }
    if (type === "podcasts" && query !== "joined") {
      const podcasts = await getDynamicPodcasts(currentPage, query, 6);

      return (
        <div className="flex w-full flex-1 flex-col">
          <div className="columns-2 space-y-4 max-lg:mt-5 max-lg:columns-1">
            {podcasts &&
              podcasts.podcasts.map((podcast, idx) => (
                <PodcastCard
                  key={podcast.id}
                  user={podcast.user}
                  podcast={podcast}
                  index={idx}
                />
              ))}
          </div>
          <div className="mt-5 flex  justify-center">
            <Pagination
              totalPages={podcasts?.totalPages!}
              currentPage={currentPage}
            />
          </div>
        </div>
      );
    }
    if (type === "groups") {
      const groups = await getDynamicGroups(currentPage, query, 4);

      return (
        <div className="flex  w-full flex-1 flex-col ">
          <div className="columns-2 gap-x-5 space-y-5 max-lg:mt-5 max-md:columns-1">
            {groups &&
              groups?.groups?.map((group) => (
                <GroupCard
                  group={group}
                  key={group.id}
                  userCount={group.users.length + group.admins.length}
                  profile={group.members.map((member) => ({
                    id: member.id,
                    image: member.image,
                  }))}
                />
              ))}
          </div>
          <div className="mt-5 flex  justify-center">
            <Pagination
              totalPages={groups?.totalPages!}
              currentPage={currentPage}
            />
          </div>
        </div>
      );
    }
  };

  return <>{renderContent(type, query)}</>;
};

export default HomeContent;
