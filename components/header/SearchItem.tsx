import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { Calendar, Followers, Layers, Podcasts } from "@/components/ui/icons";
import { SearchCommandItem } from "@/components/ui/search-command";
import { ContentItemType } from "@/lib/types.d";

const SearchItem = ({
  item,
  setOpen,
}: {
  item: ContentItemType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { type, id, title } = item;

  const renderIcon = () => {
    switch (type) {
      case "post":
        return (
          <Layers size={18} className="fill-white-400 dark:fill-white-300" />
        );
      case "meetup":
        return (
          <Calendar size={18} className="fill-white-400 dark:fill-white-300" />
        );
      case "podcast":
        return (
          <Podcasts size={18} className="fill-white-400 dark:fill-white-300" />
        );
      case "group":
        return (
          <Followers size={18} className="fill-white-400 dark:fill-white-300" />
        );
      default:
        <Layers size={18} className="fill-white-400 dark:fill-white-300" />;
        break;
    }
  };

  return (
    <Link
      key={id}
      href={`/${type}s/${id}`}
      onClick={() => {
        setOpen((open) => !open);
      }}
    >
      <SearchCommandItem value={title}>
        {renderIcon()}
        <p className="truncate">{title}</p>
      </SearchCommandItem>
    </Link>
  );
};

export default SearchItem;
