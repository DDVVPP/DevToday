import { User } from "@prisma/client";
import { formatDate } from "date-fns";
import React from "react";
import Image from "next/image";

import MotionDiv from "./MotionDiv";

interface MeetupTagProps {
  id: number;
  startTime: Date;
  meetupTitle: string;
  meetupLocation: string;
  user: Partial<User>;
  meetupTags: string[];
}
const MeetupTag = ({
  id,
  meetupLocation,
  meetupTags,
  startTime,
  meetupTitle,
  user,
}: MeetupTagProps) => {
  const formattedDate = formatDate(startTime, "MMM d");

  const month = formattedDate.slice(0, 3);
  const day = formattedDate.slice(4);
  return (
    <MotionDiv
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
    >
      <section className="group flex w-full gap-x-[14px] rounded-[6px] p-1 hover:bg-white-200 dark:hover:bg-dark-700">
        <div className="flex h-[66px] min-w-[42px] flex-col items-center justify-center rounded-[6px] text-dark-700 group-hover:bg-white-100 dark:bg-dark-700 dark:text-white-300 group-hover:dark:bg-dark-800">
          <div className="paragraph-4-regular uppercase">{month}</div>
          <span className="display-2-bold text-primary-500">{day}</span>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-y-[2px]">
            <span className="paragraph-3-medium line-clamp-1">
              {meetupTitle}
            </span>
            <div className="subtitle-regular flex items-center gap-x-[6px] dark:text-white-400">
              <Image
                className="size-4 rounded-full"
                src={user?.image!}
                alt="user image"
                width={16}
                height={16}
              />
              <span className="line-clamp-1">{meetupLocation}</span>
            </div>
          </div>
          <div className="mt-[10px] flex w-full gap-x-1">
            {meetupTags.map((tag, idx) => (
              <div
                className="caption-8 rounded-[20px] bg-white-200 px-[10px] py-[4px] uppercase text-white-400  group-hover:bg-white-100 dark:bg-dark-700 dark:text-white-300 group-hover:dark:bg-dark-800"
                key={idx}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionDiv>
  );
};

export default MeetupTag;
