"use client";

import React, { useEffect, useState, useTransition } from "react";
import Heart from "@/components/ui/icons/Heart";
import { likeCheck, likeToggle } from "@/lib/actions/content.actions";
import { ContentCategoryEnum } from "@/lib/types.d";
import { useUser } from "@clerk/nextjs";

interface LikeButtonProps {
  contentId: number;
  contentCategory: ContentCategoryEnum;
  size?: number;
  heartBgType?: "circle" | "square" | "none";
}

const LikeButton = ({
  contentId,
  contentCategory,
  size = 20,
  heartBgType = "circle",
}: LikeButtonProps) => {
  const { user } = useUser();
  const [isLiked, setIsLiked] = useState<boolean | null | undefined>(null);

  const [isPending, startTransition] = useTransition();

  const heartBackground = {
    circle:
      "rounded-full bg-white-300 p-2.5 dark:bg-dark-700 dark:group-hover:bg-dark-800 dark:group-hover/contentcard:bg-dark-800 group-hover/contentcard:bg-white-100 group-hover:duration-500",
    square: `rounded hover:duration-300 dark:bg-dark-700 hover:bg-white-200 dark:hover:bg-dark-700 w-6 h-6 ${isLiked && "dark:bg-primary-100 bg-primary-100"}`,
    none: "rounded group-hover:duration-300 group-hover/contentcard:bg-white-200 dark:group-hover/contentcard:bg-dark-700",
  };

  // if i add a like status prop, can I use that to update the like status?
  const handleToggle = async () => {
    const clerkId = user?.id;
    if (!clerkId) {
      console.error("User not logged in");
      return;
    }

    try {
      startTransition(async () => {
        const result = await likeToggle({
          clerkId,
          contentId,
          contentCategory,
        });
        if (result.error) {
          console.error("Error toggling like:", result.error);
        } else {
          setIsLiked(result.liked);
        }
      });
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  useEffect(() => {
    const fetchLike = async () => {
      const clerkId = user?.id;
      if (!clerkId) return;

      try {
        const existingLike = await likeCheck({
          clerkId,
          contentId,
          contentCategory,
        });
        setIsLiked(existingLike.liked);
      } catch (err) {
        console.error("Error checking like:", err);
      }
    };

    if (user) {
      startTransition(async () => {
        fetchLike();
      });
    }
  }, [user, contentId, contentCategory]);

  return (
    <div className="group">
      <button
        className={`flex size-[30px] items-center justify-center gap-x-2.5 ${heartBackground[heartBgType]} ${
          isPending ? "opacity-50" : "opacity-100"
        }`}
        onClick={handleToggle}
        disabled={isPending}
      >
        <Heart
          size={size}
          className={`${isPending ? "animate-pulse" : ""} group-hover:fill-primary-500 group-hover:duration-300 ${
            isLiked
              ? "fill-primary-500"
              : heartBgType === "none"
                ? "fill-white-300"
                : "fill-white-400"
          }`}
        />
      </button>
    </div>
  );
};

export default LikeButton;
