import { getTimeDifference } from "@/lib/utils";
import React from "react";
import ContainedImage from "@/components/shared/ContainedImage";
import { ProfilePlaceholder } from "@/components/ui";
import MotionDiv from "@/components/shared/MotionDiv";
const UserSection = ({
  username,
  createdAt,
  image,
}: {
  username: string;
  createdAt: Date;
  image: string;
}) => {
  return (
    <MotionDiv
      whileHover={{ scale: 1.1, originX: 0.0 }}
      className="flex items-center align-middle"
    >
      {image ? (
        <ContainedImage
          src={image!}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <ProfilePlaceholder size={40} className="shrink-0" />
      )}
      <div className="ml-2 flex flex-col justify-start">
        <p className="paragraph-3-medium text-dark-800 dark:text-white-300">
          {username}
        </p>
        <p className="paragraph-3-regular text-dark-400 whitespace-nowrap dark:text-white-200">
          {getTimeDifference(createdAt!)}
        </p>
      </div>{" "}
    </MotionDiv>
  );
};

export default UserSection;
