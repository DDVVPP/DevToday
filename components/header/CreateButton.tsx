"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ThinPlus from "../ui/icons/ThinPlus";
import { Button } from "../ui/button";
import { createMenuItems } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Plus from "../ui/icons/Plus";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CreateButton = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // To prevent hydration error

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <Popover key={"menuPopover" + isMobile}>
          {isClient && (
            <TooltipTrigger>
              <PopoverTrigger className="group rounded-md p-3 duration-300 hover:bg-primary-500">
                <Plus className="fill-white-400 duration-300 group-hover:fill-white-100 dark:fill-white-300" />
              </PopoverTrigger>
            </TooltipTrigger>
          )}

          <TooltipContent
            className="caption-10 border border-white-border text-dark-700 dark:border-dark-800 dark:bg-dark-700 dark:text-white-100"
            align="center"
          >
            Create
          </TooltipContent>
          <PopoverContent
            className="flex w-full justify-start rounded-lg border border-white-border bg-white-100 p-2 shadow-xl dark:border-dark-700 dark:bg-dark-800"
            align={isMobile ? "end" : "start"}
          >
            <div className="mx-1 flex flex-col gap-y-1">
              {createMenuItems.map((item) => (
                <>
                  <Button
                    key={item.key}
                    onClick={() => router.push(item.route)}
                    className="paragraph-3-medium align-self-start flex w-full content-start items-center justify-start gap-x-1 rounded-md bg-white-100 align-middle text-dark-900 ring-0 hover:bg-primary-100 dark:bg-dark-800  dark:text-white-200 dark:hover:bg-primary-500"
                  >
                    <ThinPlus className="size-4 self-center" />
                    <span>{item.label}</span>
                  </Button>
                </>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CreateButton;
