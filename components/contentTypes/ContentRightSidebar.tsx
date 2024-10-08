"use client";
import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNowStrict } from "date-fns";
import { Loader2 } from "lucide-react";

import { Meetup, Podcast, Post } from "@prisma/client";
import { ContentCategoryType, ContentType } from "@/lib/types.d";
import { Arrow, ProfilePlaceholder } from "../ui";
import { followUser } from "@/lib/actions/user.actions";

const ContentRightSidebar = ({
  content,
  loggedInUserId,
  clerkUserId,
  isAuthor,
  contentCategory,
}: {
  content: ContentType;
  loggedInUserId: number;
  clerkUserId: string;
  isAuthor: boolean;
  contentCategory: ContentCategoryType;
}) => {
  const {
    user: { username, createdAt, firstName, lastName, id, image, followers },
  } = content as ContentType;

  const contentList =
    content.user?.posts || content.user?.podcasts || content.user?.meetups;

  const fullName = `${firstName} ${lastName}` ?? "No name found";
  const joinedAtDate = formatDistanceToNowStrict(new Date(createdAt));
  const [isFollowing, setIsFollowing] = useState(false);
  const [pending, startTransition] = useTransition();
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  useEffect(() => {
    if (followers.length > 0) {
      const following = followers.filter(
        (follower) => follower.id === loggedInUserId
      );

      if (following.length > 0) setIsFollowing(true);
    }
  }, [followers, isFollowing, loggedInUserId]);

  const handleFollow = async () => {
    startTransition(async () => {
      await followUser(clerkUserId, id);
    });
  };

  const renderFollowTextOrLoader = pending ? (
    <Loader2 size={20} className="animate-spin" />
  ) : (
    "Follow"
  );

  return (
    <section className="flex w-full flex-col gap-y-4 max-md:mb-20">
      <section className="flex flex-col rounded-lg bg-white-100 px-6 py-8 text-center dark:bg-dark-800">
        <div className="flex w-full justify-center">
          {image ? (
            <div className="relative size-24">
              <Image
                src={image}
                alt="user-profile-image"
                fill
                className="rounded-full"
              />
            </div>
          ) : (
            <ProfilePlaceholder size={96} className="shrink-0" />
          )}
        </div>

        <div className="mt-6 space-y-1">
          <p className="display-2-bold text-dark-800 dark:text-white-100">
            {fullName}
          </p>
          <p className="paragraph-2-medium text-white-400 dark:text-white-400">
            {`@${username}` ?? "No username found"}
          </p>
        </div>

        <div className="flex flex-col gap-y-3 py-5">
          {!isAuthor && (
            <button
              className="paragraph-3-bold flex w-full justify-center rounded bg-white-200 p-2.5 hover:bg-primary-500 hover:text-white-100 hover:duration-300 disabled:border disabled:border-white-border disabled:bg-white-100 disabled:text-primary-500 dark:bg-dark-700 dark:text-white-200 dark:disabled:border-dark-border disabled:dark:bg-dark-800"
              disabled={isFollowing || pending}
              onClick={() => !isFollowing && handleFollow()}
            >
              {isFollowing ? "Following" : renderFollowTextOrLoader}
            </button>
          )}

          {isLoadingProfile ? (
            <div className="flex w-full justify-center rounded bg-white-200 p-2.5 dark:bg-dark-700 dark:text-white-200">
              <Loader2 className="ml-2 animate-spin" />
            </div>
          ) : (
            <Link
              href={`/profile/${id}`}
              onClick={() => setIsLoadingProfile(true)}
              className="paragraph-3-bold flex w-full justify-center rounded bg-white-200 p-2.5 hover:bg-primary-500 hover:text-white-100 hover:duration-300 dark:bg-dark-700 dark:text-white-200"
            >
              <p>Visit Profile</p>
            </Link>
          )}
        </div>

        <p className="paragraph-2-medium text-white-400">
          {joinedAtDate
            ? `joined ${joinedAtDate} ago`
            : `unsure when you joined`}
        </p>
      </section>

      <section className="paragraph-2-medium flex flex-col gap-y-5 rounded-lg bg-white-100 px-6 py-8 dark:bg-dark-800">
        <div className="flex items-center">
          <p className="paragraph-bold-2 pl-2 text-dark-800 dark:text-white-200">
            More from {fullName}
          </p>
          {/* TO DO: Add back when functionality to view all content is added */}
          {/* <Arrow className="stroke-dark-800 dark:stroke-white-200" size={16} /> */}
        </div>

        <div className="flex flex-col">
          {contentList.length > 1 ? (
            contentList.map((item: Post | Podcast | Meetup) => {
              return (
                content.id !== item.id && (
                  <Link
                    href={`/${contentCategory.toLowerCase()}s/${item.id}`}
                    key={item.id}
                    className="group flex gap-x-3 rounded-lg p-2 hover:bg-white-200 hover:duration-300 dark:hover:bg-dark-700"
                  >
                    {item.image ? (
                      <div className="relative size-16 shrink-0">
                        <Image
                          src={item.image}
                          alt="item-background-image"
                          fill
                          className="rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="size-12 rounded dark:bg-white-300"></div>
                    )}
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col justify-between">
                        <p className="paragraph-4-medium text-left text-dark-800 dark:text-white-200 dark:group-hover:text-white-100">
                          {item.title}
                        </p>
                        <p className="subtitle-regular text-left text-white-400">
                          by {fullName}
                        </p>
                      </div>
                      <Arrow className="stroke-white-400" size={16} />
                    </div>
                  </Link>
                )
              );
            })
          ) : (
            <p className="paragraph-3-regular ml-2 text-white-400">
              {fullName} has no additional content!
            </p>
          )}
        </div>
      </section>
    </section>
  );
};

export default ContentRightSidebar;
