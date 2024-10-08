"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { middleHeaderIconList } from "@/lib/constants";
import CreateButton from "./CreateButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HeaderNav = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false); // To prevent hydration error

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {middleHeaderIconList.map((icon) => {
        const { icon: Icon, key } = icon;
        const isSelected = pathname.includes(key);
        return (
          <TooltipProvider key={key} delayDuration={0}>
            <Tooltip>
              {isClient && (
                <TooltipTrigger>
                  <Link href={`/${key}`}>
                    <div
                      className={
                        isSelected
                          ? "rounded-md bg-primary-500 p-3"
                          : "group rounded-md p-3 hover:bg-primary-500  hover:duration-300"
                      }
                    >
                      <Icon
                        key={key}
                        className={`group-hover:fill-white-100 group-hover:duration-300 ${isSelected ? "fill-white-100" : "fill-white-400 dark:fill-white-300"}`}
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
              )}
              <TooltipContent
                className="caption-10 border border-white-border text-dark-700 dark:border-dark-800 dark:bg-dark-700 dark:text-white-100"
                align="center"
              >
                {`${icon.key[0].toUpperCase()}${icon.key.slice(1)}`}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
      <CreateButton />
    </>
  );
};

export default HeaderNav;
