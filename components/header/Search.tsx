"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  SearchCommandDialog,
  SearchCommandEmpty,
  SearchCommandGroup,
  SearchCommandInput,
  SearchCommandItem,
  SearchCommandList,
} from "@/components/ui/search-command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { findContent } from "@/lib/actions/search.actions";
import { Layers, Search as SearchIcon } from "../ui/icons";
import SearchItem from "./SearchItem";
import { ContentItemType } from "@/lib/types.d";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [content, setContent] = useState<ContentItemType[]>();
  const [isClient, setIsClient] = useState(false); // To prevent hydration error

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: {
      key: string;
      metaKey: any;
      ctrlKey: any;
      preventDefault: () => void;
    }) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const getContent = async () => {
      const results = await findContent(searchTerm);
      if (results) setContent(results.content as ContentItemType[]);
    };

    const timeout = setTimeout(() => {
      getContent();
    }, 250);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <>
      {/* SearchIcon in the Header */}
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          {isClient && (
            <TooltipTrigger>
              <div
                className="group cursor-pointer rounded-md bg-white-200 p-3 duration-300 hover:bg-primary-500 dark:bg-dark-700"
                onClick={() => setOpen((open) => !open)}
              >
                <SearchIcon className="fill-white-400 duration-300 group-hover:fill-white-100 dark:fill-white-300" />
              </div>
            </TooltipTrigger>
          )}
          <TooltipContent
            className="caption-10 border border-white-border text-dark-700 dark:border-dark-800 dark:bg-dark-700 dark:text-white-100"
            align="center"
          >
            CmdK Search
          </TooltipContent>
          <SearchCommandDialog open={open} onOpenChange={setOpen}>
            <SearchCommandInput
              value={searchTerm}
              onValueChange={setSearchTerm}
              placeholder="Type a command or search..."
            />

            <SearchCommandList>
              <SearchCommandEmpty>No results found.</SearchCommandEmpty>
              <SearchCommandGroup>
                <Link href="/posts" onClick={() => setOpen((open) => !open)}>
                  <SearchCommandItem>
                    <Layers
                      size={18}
                      className="fill-white-400 dark:fill-white-300"
                    />
                    <p>Explore all posts</p>
                  </SearchCommandItem>
                </Link>
                {content &&
                  content.length > 0 &&
                  content.map((item) => {
                    return (
                      <SearchItem key={item.id} item={item} setOpen={setOpen} />
                    );
                  })}
              </SearchCommandGroup>
            </SearchCommandList>
          </SearchCommandDialog>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default Search;
