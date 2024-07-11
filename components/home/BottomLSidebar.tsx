import { getActiveGroups, getDynamicGroups } from "@/lib/actions/group.actions";
import React from "react";
import GroupTag from "../shared/GroupTag";
import { TopRankGroups } from "@/lib/actions/shared.types";

const BottomLSidebar = async ({
  contentType,
}: {
  contentType: "posts" | "groups" | "podcasts" | "meetups";
}) => {
  const renderContent = async () => {
    if (contentType !== "groups") {
      const groups = await getDynamicGroups(1, "popular", 5);

      return (
        <div className="flex w-full flex-col justify-start gap-y-2 bg-white-100 dark:bg-dark-800">
          {groups &&
            groups?.groups?.map((group, idx) => (
              <GroupTag active={false} key={idx} group={group} />
            ))}
        </div>
      );
    }

    const active = await getActiveGroups();

    return (
      <div className="flex w-full flex-col justify-start bg-white-100  dark:bg-dark-800">
        {(active as TopRankGroups[])?.map((group: any, idx) => (
          <GroupTag active key={idx} group={group} />
        ))}
      </div>
    );
  };
  return (
    <div className="flex w-full flex-col rounded-2xl bg-white-100 pb-3 pl-[24px] pr-[20px] max-lg:hidden dark:bg-dark-800">
      <div className="flex w-full flex-col bg-white-100 dark:bg-dark-800">
        <div className="paragraph-2-bold flex justify-start  text-dark-900 dark:text-white-200">
          <span className="mb-2 ml-1 mt-5">
            {contentType !== "groups" ? "Popular Groups" : "Active Groups"}
          </span>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default BottomLSidebar;
