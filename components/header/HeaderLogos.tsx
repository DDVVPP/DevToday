import Link from "next/link";
import Image from "next/image";

import logoLight from "@/public/logoLight.svg";
import logoLightOnHover from "@/public/logoLightOnHover.svg";
import logoDark from "@/public/logoDark.svg";
import logoDarkOnHover from "@/public/logoDarkOnHover.svg";

const HeaderLogos = () => {
  return (
    <Link href={`/posts`} className="group">
      <Image
        priority
        src={logoLight}
        alt="LogoLight"
        className="-mt-1.5 block group-hover:hidden dark:hidden"
      />
      <Image
        priority
        src={logoLightOnHover}
        alt="LogoLight"
        className="-mt-1.5 hidden group-hover:block dark:hidden dark:group-hover:hidden"
      />

      <Image
        priority
        src={logoDark}
        alt="LogoDark"
        className="-mt-1.5 hidden dark:block dark:group-hover:hidden"
      />
      <Image
        priority
        src={logoDarkOnHover}
        alt="LogoLight"
        className="-mt-1.5 hidden dark:group-hover:block"
      />
    </Link>
  );
};

export default HeaderLogos;
