"use client";

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

  return (
    <>
      {middleHeaderIconList.map((icon) => {
        const { icon: Icon, key } = icon;
        const isSelected = pathname.includes(key);
        return (
          <TooltipProvider key={key}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={
                    isSelected
                      ? "rounded-md bg-primary-500 p-3"
                      : "group rounded-md p-3 transition duration-300  hover:bg-primary-500"
                  }
                >
                  <Link href={`/${key}`}>
                    <Icon
                      key={key}
                      fill={isSelected ? "fill-white-100" : ""}
                      className="transition duration-300 group-hover:fill-white-100"
                    />
                  </Link>
                </div>
              </TooltipTrigger>
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
