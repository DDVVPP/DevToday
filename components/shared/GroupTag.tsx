import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GroupTagContent } from "@/lib/types.d";
import { TopRankGroups } from "@/lib/actions/shared.types";
import MotionDiv from "./MotionDiv";

const GroupTag = async ({
  group,
  active,
}: {
  group: GroupTagContent | TopRankGroups;
  active: boolean;
}) => {
  return (
    <MotionDiv
      className="rounded p-1 hover:bg-white-200 hover:duration-300 dark:hover:bg-dark-700"
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
    >
      <Link href={`/groups/${group.id}`}>
        <div className="line-clamp-1 flex justify-normal gap-x-2.5 truncate lg:max-w-[169px]">
          <div className="relative size-8">
            <Image
              src={group.coverImage!}
              alt="group image"
              fill
              className="rounded-sm"
            />
          </div>
          <div className="flex w-full flex-col justify-between overflow-hidden">
            <div className="paragraph-4-medium truncate capitalize text-dark-700 dark:text-white-100">
              {group.name}
            </div>
            <div className="subtitle-medium text-white-400 dark:text-white-400">
              <span className="">{group.postCount}</span> Posts Published{" "}
              {active && <span>Recently</span>}
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default GroupTag;
