"use client";

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MeetupCard from "@/components/profile/posts/MeetupCard";
import { actionButtonItems } from "@/lib/constants";
import PostCard from "@/components/profile/posts/PostCard";
import PodcastCard from "@/components/profile/posts/PodcastCard";
import GroupCard from "@/components/profile/posts/GroupCard";
import { UserWithProfileContent } from "@/lib/actions/shared.types";
import ContentNotFound from "@/components/shared/ContentNotFound";

const ProfileContent = ({
  className,
  content,
}: {
  className: string;
  content: UserWithProfileContent;
}) => {
  const [tabValue, setTabValue] = React.useState<string>("posts");

  return (
    <>
      <Tabs
        defaultValue={tabValue}
        onValueChange={(value) => setTabValue(value)}
        className={`${className}`}
      >
        <div className=" flex w-full  items-center justify-between gap-y-2.5 bg-white-100 text-white-400 lg:rounded-[12px] lg:px-[30px] lg:py-5 dark:bg-dark-800 dark:text-white-100">
          <TabsList className="gap-x-auto flex w-full dark:bg-dark-800">
            {actionButtonItems.map((item) => (
              <TabsTrigger
                key={item.key}
                value={item.key}
                className="lg:paragraph-1-medium paragraph-3-medium flex w-1/5 rounded-[7px]"
              >
                {item.text}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent
          value="posts"
          className="mt-5 flex w-full justify-center space-y-2.5 bg-white-200 dark:bg-dark-900"
        >
          {content && content.posts ? (
            content.posts?.map((post: any, index: number) => (
              <PostCard
                key={index}
                userData={content}
                post={{
                  ...post,
                  commentCount: post.commentCount,
                  tags: post.tags,
                }}
              />
            ))
          ) : (
            <ContentNotFound contentCategory="Post" isPlural />
          )}
        </TabsContent>
        <TabsContent
          value="meetups"
          className={`${!content || !content.meetups ? "flex justify-center" : "mt-5"} space-y-2.5 bg-white-200 dark:bg-dark-900`}
        >
          {content && content.meetups ? (
            content.meetups?.map((meetup: any, index: number) => (
              <MeetupCard key={index} meetup={meetup} />
            ))
          ) : (
            <ContentNotFound contentCategory="Meetup" isPlural />
          )}
        </TabsContent>
        <TabsContent
          value="podcasts"
          className={`${!content || !content.podcasts ? "flex justify-center" : "mt-5"} w-full space-y-2.5 bg-white-200 dark:bg-dark-900`}
        >
          {content && content.podcasts ? (
            content.podcasts?.map((podcast: any, index: number) => (
              <div
                key={index}
                className=" columns-2  gap-x-5 space-y-5 max-md:columns-1"
              >
                <PodcastCard user={content} podcast={podcast} />
              </div>
            ))
          ) : (
            <ContentNotFound contentCategory="Podcast" isPlural />
          )}
        </TabsContent>

        <TabsContent
          value="groups"
          className={`${!content || !content.groups ? "mt-0 flex justify-center" : "mt-5"}  w-full space-y-2.5 bg-white-200 dark:bg-dark-900`}
        >
          {content && content.groups ? (
            content.groups?.slice(0, 4).map((group: any, index: any) => (
              <div
                key={index}
                className="columns-2 gap-x-5 space-y-5 max-md:columns-1 "
              >
                <div className="rounded-[16px] bg-white-200 dark:bg-dark-800">
                  <GroupCard
                    group={group}
                    userCount={group.memberCount}
                    profile={group?.members}
                  />
                </div>
              </div>
            ))
          ) : (
            <ContentNotFound contentCategory="Group" isPlural />
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProfileContent;
