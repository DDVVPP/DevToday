import { format as formatDate } from "date-fns";
import Link from "next/link";

import { ContentCategoryEnum, ContentType } from "@/lib/types.d";
import { Comment, Eye, Share } from "../ui";
import LikeButton from "../shared/LikeButton";

const ContentLeftSidebar = ({
  content,
  contentCategory,
}: {
  content: ContentType;
  contentCategory: ContentCategoryEnum;
}) => {
  const {
    id: contentId,
    likes,
    views,
    comment,
    createdAt,
    user: { username, id },
  } = content as ContentType;
  const postedOnDate = formatDate(new Date(createdAt), "MMM dd, yyyy");

  return (
    <section className="flex w-full flex-col gap-y-5">
      <section className="paragraph-2-medium space-y-3 rounded-lg bg-white-100 p-5 text-white-400 dark:bg-dark-800">
        <div className="flex items-center gap-x-2">
          <LikeButton
            contentId={contentId}
            contentCategory={contentCategory}
            size={16}
            heartBgType="square"
          />
          <div>{likes ? `${likes} Hearts` : "No likes yet"}</div>
        </div>

        <div className="flex items-center gap-x-2 whitespace-nowrap">
          <div className="rounded dark:bg-dark-700">
            <Comment size={24} className="dark:rounded dark:fill-dark-700" />
          </div>
          <div>
            {comment && comment.length > 0
              ? comment.length === 1
                ? `1 Comment`
                : `${comment.length} Comments`
              : "No comments yet"}
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="flex size-6 items-center justify-center rounded dark:bg-dark-700">
            <Eye />
          </div>
          <div>{views ? `${views} Views` : "No views yet"}</div>
        </div>
      </section>

      <button
        type="button"
        className="paragraph-3-medium group flex items-center justify-center gap-x-2 rounded bg-[#c9ccd2] p-2.5 hover:bg-primary-500 hover:duration-300  max-md-b:hidden dark:bg-dark-700"
      >
        <Share
          size={14}
          className="fill-dark-700 group-hover:fill-white-100 group-hover:duration-300 dark:fill-white-300"
        />
        <p className="text-dark-700 group-hover:text-white-100 group-hover:duration-300 dark:text-white-300">
          Share Post
        </p>
      </button>

      <div className="paragraph-2-medium flex rounded-lg bg-white-100 p-4 text-center text-white-400 max-md-b:hidden dark:bg-dark-800">
        <div>
          <Link
            href={`/profile/${id}`}
            className="mr-1 text-[#5D95E8] hover:text-blue-300 hover:duration-300"
          >
            {username ?? "Username is missing!"}
          </Link>
          {postedOnDate
            ? ` Posted on ${postedOnDate}`
            : " Posted on date missing"}
        </div>
      </div>
    </section>
  );
};

export default ContentLeftSidebar;
