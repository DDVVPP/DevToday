import { ContentCategoryType } from "@/lib/types.d";
import Link from "next/link";

const ContentNotFound = ({
  contentCategory,
  isPlural,
}: {
  contentCategory: ContentCategoryType;
  isPlural?: boolean;
}) => {
  const pluralLowerCaseContentType = `${contentCategory.toLowerCase()}s`;

  return (
    <div className="paragraph-1-medium m-20 flex flex-col justify-center gap-y-6 text-dark-700 dark:text-white-200">
      <h1 className="text-center">
        {contentCategory}
        {isPlural && "s"} not found
      </h1>
      <Link
        className="rounded bg-primary-500 px-4 py-2 text-white-200 hover:opacity-70 hover:duration-300"
        href={`/${pluralLowerCaseContentType}`}
      >
        Click here to view all {pluralLowerCaseContentType}
      </Link>

      {isPlural && (
        <Link
          className="rounded bg-primary-500 px-4 py-2 text-center text-white-200 hover:opacity-70 hover:duration-300"
          href={`/${pluralLowerCaseContentType}/create-post`}
        >
          Click here to create {contentCategory.toLowerCase()}
        </Link>
      )}
    </div>
  );
};

export default ContentNotFound;
