import { currentUser } from "@clerk/nextjs";

import Link from "next/link";

import ClerkMenuController from "./ClerkMenuController";
import HeaderNav from "./HeaderNav";
import UserButtonNav from "./UserButtonNav";
import NotificationsMenu from "./NotificationsMenu";
import Search from "./Search";
import HeaderLogos from "./HeaderLogos";

const Header = async () => {
  // Clerk User
  const user = await currentUser();

  return (
    <>
      <header className="sticky flex h-20 items-center justify-between bg-white-100 px-8 dark:bg-dark-800">
        <HeaderLogos />

        <section className="flex gap-x-7 px-3 max-md:hidden">
          <HeaderNav />
        </section>

        <section className="flex items-center gap-x-4">
          <Search />
          <NotificationsMenu userId={user?.id ?? ""} />

          {user ? (
            <UserButtonNav />
          ) : (
            <Link
              href="/sign-in"
              className="rounded bg-white-200 hover:bg-primary-500 dark:bg-dark-700"
            >
              <p className="paragraph-2-medium text-nowrap p-3 text-dark-700 hover:text-white-100 dark:text-white-300">
                Sign In
              </p>
            </Link>
          )}
        </section>
      </header>

      {/* MOBILE VIEW */}
      <footer className="fixed bottom-0 z-20 flex h-20 w-full items-center justify-between bg-white-100 px-8 md:hidden dark:bg-dark-800">
        <HeaderNav />
      </footer>

      <ClerkMenuController />
    </>
  );
};

export default Header;
